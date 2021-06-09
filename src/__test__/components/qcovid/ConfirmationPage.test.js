import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationPage from '../../../components/qcovid/ConfirmationPage';

const setup = ({ assessment }) => {
  const props = {
    assessment,
  };

  return render(<ConfirmationPage {...props} />);
};

describe('Confirmation Page', () => {
  it('should match snapshot when death relative risk is greater than one', () => {
    const container = setup({
      assessment: {
        death: {
          probability: 5.2629,
          baseline: 0.2227,
          relativeRisk: 23.63,
        },
        hospitalisation: {
          probability: 0.4003,
          baseline: 0.4003,
          relativeRisk: 1,
        },
        basis: {
          Age: 85,
          height: 178,
          weight: 78,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when hospitalisation relative risk is greater than one', () => {
    const container = setup({
      assessment: {
        death: {
          probability: 0.2227,
          baseline: 0.2227,
          relativeRisk: 1,
        },
        hospitalisation: {
          probability: 0.8,
          baseline: 0.4003,
          relativeRisk: 1,
        },
        basis: {
          Age: 85,
          height: 178,
          weight: 78,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot when relative risk is not greater than 1', () => {
    const container = setup({
      assessment: {
        death: {
          probability: 0.2227,
          baseline: 0.2227,
          relativeRisk: 1,
        },
        hospitalisation: {
          probability: 0.4003,
          baseline: 0.4003,
          relativeRisk: 1,
        },
        baseline: {
          age: 80,
          height: 187,
          weight: 99,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should handle warnings from the server', () => {
    const container = setup({
      assessment: {
        death: {
          probability: 0.2227,
          baseline: 0.2227,
          relativeRisk: 1,
        },
        hospitalisation: {
          probability: 0.4003,
          baseline: 0.4003,
          relativeRisk: 1,
        },
        baseline: {
          age: 80,
          height: 187,
          weight: 99,
        },
        warnings: [
          {
            coding: [
              {
                code: '27113001',
                display: 'Weight in kg',
                system: 'http://snomed.info/sct',
              },
            ],
            message: 'Weight (kg) was unused',
            severity: 'warning',
          },
        ],
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });
});
