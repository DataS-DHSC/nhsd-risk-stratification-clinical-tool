import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioMultiValue from '../../components/RadioMultiValue';

const setupDefaultProps = (defaultFieldValue) => {
  const props = {
    field: {
      label: 'Diabetes',
      type: 'multiradio',
      inline: false,
      default: defaultFieldValue,
      options: [
        { name: 'value1', label: 'Value1' },
        { name: 'value2', label: 'Value2' },
        { name: 'value3', label: 'Value3' },
      ],
    },
    groupName: 'diabetes',
    prevData: {},
    setField: jest.fn(),
  };

  return props;
};

describe('RadioMultiValue', () => {
  it('should take its value from prevData rather than the default', () => {
    const props = {
      ...setupDefaultProps('value2'),
      prevData: { diabetes: 'value1' },
    };

    const container = render(<RadioMultiValue {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should take the default value when the field is not in prevData', () => {
    const props = { ...setupDefaultProps('value2') };
    const container = render(<RadioMultiValue {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should should call setField on value change', () => {
    const setField = jest.fn();

    const props = {
      ...setupDefaultProps('value1'),
      setField,
    };

    const { container } = render(<RadioMultiValue {...props} />);

    userEvent.click(container.querySelector('#diabetes-value2'));

    expect(setField).toHaveBeenCalledWith('diabetes', 'value2');
  });
});
