import React from 'react';
import { render } from '@testing-library/react';
import RiskPanel from '../../components/RiskPanel';

const setup = () => {
  const props = {
    riskType: 'hospitalisation',
    probability: 5,
    relativeRisk: 50,
  };

  return render(<RiskPanel {...props} />);
};

describe('RiskPanel', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
