import parse from 'urlencoded-body-parser';
import { v4 as newUuid } from 'uuid';
import cookie from 'cookie';
import { log } from './logger';
import { retrieveQueryStringParameters } from './retrieveVariablesFromURL';
import readFeatureFlags from './readFeatureFlags';

const componentName = 'weblambda';
const componentVersion = process.env.WEB_CODE_VERSION || 'unknown';
const environment = process.env.ENVIRONMENT || 'unknown';

const isDataUrl = (url) => url.includes('/_next/data');

function readCorrelationId(req) {
  let correlationId;

  if (req.headers.cookie) {
    correlationId = cookie.parse(req.headers.cookie).correlationId;
  }

  if (correlationId && correlationId !== 'undefined') {
    return correlationId;
  }
  return newUuid();
}

export async function readServerSideRequest(req) {
  const allowGet = retrieveQueryStringParameters(req.url).allowGet === 'true';
  const formData = await parse(req);
  const correlationId = readCorrelationId(req);
  const csrfToken = req.headers['x-csrf-token'] || '';
  formData.csrfToken = csrfToken;

  // Names of log fields are from https://nhsd-confluence.digital.nhs.uk/display/RIS/On+demand+Splunk+logging
  const description = isDataUrl(req.url)
    ? 'Page data hydration request'
    : 'Page render request';
  log.info({
    method: req.method,
    url: req.url,
    csrfToken,
    correlationId,
    environment,
    componentName,
    componentVersion,
    description,
  });

  return {
    method: req.method,
    allowGet,
    url: req.url,
    csrfToken,
    correlationId,
    formData,
  };
}

export function processServerSideProps(res, reqData, options) {
  const allowGet =
    (options && options.allowGet) || process.env.ALLOW_GET_REQUESTS === true;

  const usingGet = reqData.method === 'GET';
  const prevData = reqData.formData;
  const { correlationId } = reqData;

  prevData.csrfToken = reqData.csrfToken || '';

  if (prevData.postcode) {
    prevData.postcode = prevData.postcode.trim();
  }

  res.setHeader('Set-Cookie', [
    `__Host-csrfToken=${reqData.csrfToken}; Secure; HttpOnly; SameSite=Strict; Path=/;`,
    `correlationId=${correlationId}; Secure; SameSite=Strict; Path=/;`,
  ]);

  if (usingGet && !allowGet && !isDataUrl(reqData.url)) {
    // GET requests for this page are not allowed
    return {
      props: {
        error: {
          statusCode: 400,
          title: 'Method not allowed',
        },
      },
    };
  }

  return {
    props: {
      prevData,
      allowGet,
      correlationId,
    },
  };
}

function handleServerSideProps(options = {}) {
  return async (context) => {
    const { req, res } = context;
    const reqData = await readServerSideRequest(req);
    const requestState = processServerSideProps(res, reqData, {
      allowGet: reqData.allowGet,
      ...options,
    });

    return {
      props: { ...requestState.props, featureFlags: await readFeatureFlags() },
    };
  };
}

export default handleServerSideProps;
