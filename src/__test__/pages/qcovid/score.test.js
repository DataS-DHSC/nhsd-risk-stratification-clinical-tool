import React from 'react';
import { render } from '@testing-library/react';
import Score, { getServerSideProps } from '../../../pages/ras/qcovid/score';
import riskAssessment from '../../../utils/riskAssessment';
import {
  readServerSideRequest,
  processServerSideProps,
} from '../../../utils/handleServerSideProps';

// Mock internal functions of getServerSideProps
jest.mock('../../../utils/riskAssessment');
jest.mock('../../../utils/handleServerSideProps');
jest.mock('../../../utils/readFeatureFlags');

riskAssessment.mockResolvedValue({
  warnings: [],
  death: { probability: 0.4333, baseline: 0.0101, relativeRisk: 43.0614 },
  hospitalisation: {
    probability: 3.484,
    baseline: 0.0695,
    relativeRisk: 50.1307,
  },
  basis: {
    'Age (19-100)': 29,
  },
});

readServerSideRequest.mockResolvedValue({
  method: 'POST',
  url: '/ras/qcovid/score',
  csrfToken: '',
  correlationId: 'ead1c4fe',
  formData: {
    csrfToken: '',
    headers: '{"correlationId":"ead1c4fe"}',
    age: '29',
  },
});

processServerSideProps.mockReturnValueOnce({
  props: {
    prevData: {
      age: 29,
      csrfToken: '',
      headers: '{"correlationId":"ead1c4fe"}',
    },
  },
});

// setup generic props and component instance for test cases
const setup = ({ success, assessment }) => {
  const props = {
    success,
    score: 20,
    assessment,
    correlationId: 'foo',
  };

  return render(<Score {...props} />);
};

// test snapshot and function call
describe('score', () => {
  it('should match snapshot when success', () => {
    const container = setup({
      assessment: {
        death: {
          probability: 5.2629,
          baseline: 0.2227,
          relativeRisk: 23.63,
        },
        hospitalisation: {
          probability: 11.6024,
          baseline: 0.4003,
          relativeRisk: 28.99,
        },
        basis: {},
      },
      success: true,
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when no success', () => {
    const container = setup({
      success: false,
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should return props', async () => {
    const context = {
      req: '',
      res: '',
    };

    const props = await getServerSideProps(context);

    expect(props).toEqual({
      props: {
        prevData: {
          age: 29,
          csrfToken: '',
          headers: '{"correlationId":"ead1c4fe"}',
        },
        assessment: {
          basis: {
            'Age (19-100)': 29,
          },
          death: {
            baseline: 0.0101,
            probability: 0.4333,
            relativeRisk: 43.0614,
          },
          hospitalisation: {
            baseline: 0.0695,
            probability: 3.484,
            relativeRisk: 50.1307,
          },
          warnings: [],
        },
        success: true,
        correlationId: 'ead1c4fe',
      },
    });
  });
});
