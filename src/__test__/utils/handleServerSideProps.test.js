import handleServerSideProps, {
  readServerSideRequest,
  processServerSideProps,
} from '../../utils/handleServerSideProps';
import { isFeatureEnabled } from '../../utils/configCacheHandler';

jest.mock('../../utils/configCacheHandler');

describe('readServerSideRequest', () => {
  it('should return form data passed in on POST request', async () => {
    const req = {
      headers: {
        'content-type': 'application/json',
        'x-csrf-token': '',
        cookie: 'correlationId=ead1c4fe',
      },
      rawBody:
        'csrfToken=&age=29&sex=male&ethnic-group=chinese&housing=not-homeless-or-resident-of-care-home&postcode=',
      method: 'POST',
      url: '/ras/qcovid/body-mass-index',
    };

    const output = await readServerSideRequest(req);

    expect(output).toEqual({
      method: 'POST',
      url: '/ras/qcovid/body-mass-index',
      csrfToken: '',
      allowGet: false,
      correlationId: 'ead1c4fe',
      formData: {
        csrfToken: '',
        age: '29',
        sex: 'male',
        'ethnic-group': 'chinese',
        housing: 'not-homeless-or-resident-of-care-home',
        postcode: '',
      },
    });
  });

  it('should return a new correlationID when no correlationID provided', async () => {
    const req = {
      headers: {
        'content-type': 'application/json',
        'x-csrf-token': '',
        cookie: '',
      },
      rawBody: 'csrfToken=',
      method: 'GET',
      url: '/ras/qcovid',
    };

    const output = await readServerSideRequest(req);

    expect(output).toEqual({
      method: 'GET',
      url: '/ras/qcovid',
      csrfToken: '',
      allowGet: false,
      correlationId: expect.any(String),
      formData: {
        csrfToken: '',
      },
    });
  });
});

describe('processServerSideProps', () => {
  it('should not allow GET requests when GET not explicitly allowed', () => {
    const res = {
      setHeader: jest.fn(),
    };
    const reqData = {
      method: 'GET',
      formData: {},
      csrfToken: '',
      url: 'ras/amb/patient-details',
    };
    const options = {
      allowGet: false,
    };
    expect(processServerSideProps(res, reqData, options)).toEqual({
      props: {
        error: {
          statusCode: 400,
          title: 'Method not allowed',
        },
      },
    });
  });

  it('should allow GET requests on data route even though GET not explicitly allowed', () => {
    const res = {
      setHeader: jest.fn(),
    };
    const reqData = {
      method: 'GET',
      formData: {},
      csrfToken: '',
      url: '/_next/data/VWvw6V0yByt2alg52jKc5/ras/amb/medical-info.json',
    };
    const options = {
      allowGet: false,
    };
    expect(processServerSideProps(res, reqData, options)).toEqual({
      props: {
        allowGet: false,
        correlationId: undefined,
        prevData: {
          csrfToken: '',
        },
      },
    });
  });

  it('should allow GET when GET explicitly allowed', () => {
    const res = {
      setHeader: jest.fn(),
    };
    const reqData = {
      method: 'GET',
      formData: {},
      csrfToken: '',
    };
    const options = {
      allowGet: true,
    };
    expect(processServerSideProps(res, reqData, options)).toEqual({
      props: {
        allowGet: true,
        correlationId: undefined,
        prevData: {
          csrfToken: '',
        },
      },
    });
  });

  it('should return request data on POST', () => {
    const res = {
      setHeader: jest.fn(),
    };
    const reqData = {
      method: 'POST',
      formData: {
        age: 28,
      },
      csrfToken: '',
    };
    const options = {
      allowGet: true,
    };
    expect(processServerSideProps(res, reqData, options)).toEqual({
      props: {
        allowGet: true,
        correlationId: undefined,
        prevData: {
          age: 28,
          csrfToken: '',
        },
      },
    });
  });

  it('should trim postcode and return request data on POST', () => {
    const res = {
      setHeader: jest.fn(),
    };
    const reqData = {
      method: 'POST',
      formData: {
        age: 28,
        postcode: '   ',
      },
      csrfToken: '',
    };
    const options = {
      allowGet: true,
    };
    expect(processServerSideProps(res, reqData, options)).toEqual({
      props: {
        allowGet: true,
        correlationId: undefined,
        prevData: {
          age: 28,
          postcode: '',
          csrfToken: '',
        },
      },
    });
  });
});

describe('handleServerSideProps', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return feature flags in props', async () => {
    const req = {
      headers: {
        'content-type': 'application/json',
      },
      rawBody: 'headers={"correlationId":"ead1c4fe"}',
      method: 'POST',
      url: '/ras/qcovid/body-mass-index',
    };

    isFeatureEnabled.mockImplementation(() => true);

    const result = await handleServerSideProps()({
      req,
      res: { setHeader: jest.fn() },
    });
    const { featureFlags } = result.props;
    expect(featureFlags).toEqual({ isAdobeAnalyticsEnabled: true });
  });
});
