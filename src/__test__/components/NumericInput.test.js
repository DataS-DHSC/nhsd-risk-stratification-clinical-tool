import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumericInput from '../../components/NumericInput';

const defaultProps = {
  field: {
    label: 'test label',
    ariaLabel: 'test label aria',
    hint: 'test hint',
    hintAriaLabel: 'test hint aria',
    min: 0,
    max: 100,
  },
  required: true,
  prevData: { testField: '10' },
  groupName: 'testField',
  setField: jest.fn(),
  changeCallback: jest.fn(),
};

describe('NumericInput', () => {
  it('should match snapshot before and after conversion', () => {
    const props = {
      ...defaultProps,
      field: {
        label: 'test label',
        ariaLabel: 'test label aria',
        hint: 'test hint',
        hintAriaLabel: 'test hint aria',
        min: 0,
        max: 100,
        conversion: 'cm-to-ft-in',
      },
    };

    const { getByRole, asFragment } = render(<NumericInput {...props} />);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.change(getByRole('spinbutton'), { target: { value: '55' } });

    expect(asFragment()).toMatchSnapshot();
  });

  it('sets state and calls callback on change', () => {
    const setField = jest.fn();
    const changeCallback = jest.fn();
    const props = {
      ...defaultProps,
      setField,
      changeCallback,
    };

    const { getByRole, asFragment } = render(<NumericInput {...props} />);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.change(getByRole('spinbutton'), { target: { value: '55' } });

    expect(setField).toHaveBeenCalledWith('testField', '55');
    expect(changeCallback).toHaveBeenCalledWith('testField', '55');
    expect(asFragment()).toMatchSnapshot();
  });

  it('removes leading zeros onBlur', () => {
    const setField = jest.fn();
    const props = {
      ...defaultProps,
      setField,
    };

    const { getByRole } = render(<NumericInput {...props} />);

    fireEvent.blur(getByRole('spinbutton'), { target: { value: '055' } });

    expect(setField).toHaveBeenCalledWith('testField', '55');
  });
});
