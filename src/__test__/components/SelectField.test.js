import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectField from '../../components/SelectField';

const setupDefaultProps = (defaultFieldValue) => {
  const props = {
    field: {
      label: 'testLabel',
      type: 'select',
      default: defaultFieldValue,
      options: [
        {
          label: '',
          options: [{ name: 'please-select', label: 'Please select' }],
        },
        {
          label: 'subGroup1',
          options: [
            { name: 'sub1value1', label: 'Value11' },
            { name: 'sub1value2', label: 'Value12' },
          ],
        },
        {
          label: 'subGroup2',
          options: [
            { name: 'sub2value1', label: 'Value21' },
            { name: 'sub2value2', label: 'Value22' },
          ],
        },
      ],
    },
    groupName: 'testValueId',
    prevData: {},
    setField: jest.fn(),
  };

  return props;
};

describe('SelectField', () => {
  it('should match snapshot when there is no default nor prevData value', () => {
    const props = { ...setupDefaultProps(undefined), prevData: {} };
    const container = render(<SelectField {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should take its value from prevData rather than the default', () => {
    const props = {
      ...setupDefaultProps('sub1value2'),
      prevData: { testValueId: 'sub1value1' },
    };

    const container = render(<SelectField {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should take the default value when the field is not in prevData', () => {
    const props = { ...setupDefaultProps('sub1value2'), prevData: {} };
    const container = render(<SelectField {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should call setField on value change', () => {
    const setField = jest.fn();

    const props = {
      ...setupDefaultProps('sub1value1'),
      setField,
    };

    const { getByRole } = render(<SelectField {...props} />);

    userEvent.selectOptions(getByRole('combobox'), ['sub1value2']);

    expect(setField).toHaveBeenCalledWith('testValueId', 'sub1value2');
  });
});
