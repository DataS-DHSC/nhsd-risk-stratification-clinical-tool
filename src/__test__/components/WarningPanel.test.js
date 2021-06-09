import React from 'react';
import { render } from '@testing-library/react';
import WarningPanel from '../../components/WarningPanel';

const setup = (warnings) => {
  const props = {
    warnings,
  };

  return render(<WarningPanel {...props} />);
};

describe('WarningPanel', () => {
  it('empty should render blank fragment ', () => {
    const container = setup([]);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('warnings should render', () => {
    const container = setup([
      {
        coding: {
          code: '206',
          system: 'http://qcovid.org',
        },
        message: 'No BMI was provided. A BMI of 25 will be used.',
        severity: 'warning',
      },
      {
        coding: {
          code: '301',
          system: 'http://qcovid.org',
        },
        message:
          'No postcode was provided. A Townsend score of 0 will be used.',
        severity: 'warning',
      },
    ]);

    expect(container.asFragment()).toMatchSnapshot();
  });
});
