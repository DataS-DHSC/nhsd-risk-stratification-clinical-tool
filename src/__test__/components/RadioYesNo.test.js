import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioYesNo from '../../components/RadioYesNo';

const defaultProps = {
  field: {
    label: 'Asthma',
    type: 'radio',
    inline: true,
    default: 'true',
  },
  prevData: {},
  groupName: 'asthma',
  setField: jest.fn(),
};

describe('RadioYesNo', () => {
  it('should take its value from prevData rather than the default', () => {
    const props = { ...defaultProps, prevData: { asthma: 'false' } };
    const container = render(<RadioYesNo {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should take the default value when the field is not in prevData', () => {
    const props = { ...defaultProps, prevData: {} };
    const container = render(<RadioYesNo {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should call setField on change', () => {
    const setField = jest.fn();
    const props = { ...defaultProps, setField };
    const { container } = render(<RadioYesNo {...props} />);

    userEvent.click(container.querySelector('#asthma-no'));
    expect(setField).toHaveBeenCalledWith('asthma', 'false');

    userEvent.click(container.querySelector('#asthma-yes'));
    expect(setField).toHaveBeenCalledWith('asthma', 'true');
  });
});
