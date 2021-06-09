import Head from 'next/head';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { ROUTE_IP_ENDPOINT, ROUTE_SUPPORT_FORM } from '../../constants/routes';
import { SITE_BRANDING_TITLE } from '../../constants/site-branding';

const errors = [
  {
    code: 400,
    title: 'Something went wrong',
  },
  {
    code: 404,
    title: 'Page not found',
    message:
      'If you entered a web address, make sure you entered it correctly.\n\nIf you pasted the web address, make sure you copied the entire address. ',
  },
  {
    code: 503,
    title: 'Service unavailable',
    message:
      'Sorry, but this service is currently unavailable whilst a new version is being released. It will be available again soon. Please try again later.',
  },
];

const ErrorPage = ({ statusCode, startAgainLink }) => {
  let error = errors.find((e) => e.code === statusCode);
  if (!error) error = errors.find((e) => e.code === 400);

  const correlationId = cookie.load('correlationId') || 'ead1c4fe';

  return (
    <>
      <Head>
        <title>{SITE_BRANDING_TITLE} - Error</title>
        <meta name="description" content={`${SITE_BRANDING_TITLE} error`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-full">
          <h1 id="error-heading">{error.title}</h1>
        </div>
        <div className="nhsuk-grid-column-two-thirds">
          {statusCode === 400 || statusCode === 403 ? (
            <p id="temporary-problem-message">
              Sorry, an error has occurred with the service. This is usually a
              temporary problem, but if it continues you should let our Helpdesk
              know.
              <br />
              <br />
              If you need to contact the Helpdesk:
              <br />
              <br />
              You may first need to{' '}
              <a
                href={ROUTE_IP_ENDPOINT}
                rel="noreferrer nofollow noopener"
                target="_blank"
              >
                find your IP address (opens in new window)
              </a>
              {correlationId &&
                ` and enter that as well as your Correlation ID: ${correlationId} `}
              in ‘Your message for us’ when you{' '}
              <a
                rel="noreferrer nofollow noopener"
                target="_blank"
                href={encodeURI(`${ROUTE_SUPPORT_FORM}`)}
                id="helpdesk-link"
              >
                complete the helpdesk contact form (opens in new window)
              </a>
            </p>
          ) : (
            <p style={{ whiteSpace: 'pre-wrap' }}>{error.message}</p>
          )}

          {startAgainLink && (
            <a
              href={startAgainLink}
              className="nhsuk-u-margin-top-5 nhsuk-u-font-size-19"
              id="new-assessment-link"
            >
              Start a new COVID-19 risk assessment
            </a>
          )}
        </div>
      </div>
    </>
  );
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
  startAgainLink: PropTypes.string,
};

ErrorPage.defaultProps = {
  startAgainLink: '',
};

export default ErrorPage;
