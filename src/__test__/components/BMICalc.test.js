import React from 'react';
import { render } from '@testing-library/react';
import BMICalc from '../../components/BMICalc';

const setup = () => {
  const props = {
    field: {
      label: "The patient's BMI score is:",
      links: ['weight', 'height'],
    },
    prevData: undefined,
    linkedValues: [
      { groupName: 'height', value: 140 },
      { groupName: 'weight', value: 77 },
    ],
    groupName: 'bmi-calc',
  };

  return render(<BMICalc {...props} />);
};

describe('BMICalc', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
