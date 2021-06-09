import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from '../../components/TextInput';

const defaultProps = {
  required: true,
  prevData: { testField: 'testValue' },
  groupName: 'testField',
  setField: jest.fn(),
};

describe('TextInput', () => {
  it('should match snapshot', () => {
    const props = {
      ...defaultProps,
      field: {
        label: 'test label',
      },
    };

    const container = render(<TextInput {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('sets customValidity as soon as it recieves an onInput event', () => {
    const mockValidator = jest.fn();
    mockValidator.mockImplementationOnce(() => 'testValidationMessage');

    const props = {
      ...defaultProps,
      field: {
        label: 'test label',
        hint: 'test hint',
        fieldValidator: mockValidator,
      },
    };

    const { getByRole } = render(<TextInput {...props} />);
    const setCustomValidity = jest.fn();

    fireEvent.input(getByRole('textbox'), {
      target: { value: 'changed value', setCustomValidity },
    });

    expect(mockValidator).toHaveBeenCalledWith('changed value');
    expect(setCustomValidity).toHaveBeenCalledWith('testValidationMessage');
  });

  it('sets context data on input change', () => {
    const setField = jest.fn();

    const props = {
      ...defaultProps,
      field: {
        label: 'test label',
      },
      setField,
    };

    const { getByRole, asFragment } = render(<TextInput {...props} />);

    fireEvent.change(getByRole('textbox'), { target: { value: 'test value' } });

    expect(setField).toHaveBeenCalledWith('testField', 'test value');
    expect(asFragment()).toMatchSnapshot();
  });

  test.each([
    ['   test', 'test'],
    ['test   ', 'test'],
    ['  test  ', 'test'],
    ['test', 'test'],
    ['   ', ''],
  ])('should trim value onBlur', (input, trimmed) => {
    const setField = jest.fn();

    const props = {
      ...defaultProps,
      field: {
        label: 'test label',
      },
      setField,
    };

    const { getByRole } = render(<TextInput {...props} />);

    fireEvent.blur(getByRole('textbox'), { target: { value: input } });

    expect(setField).toHaveBeenCalledWith('testField', trimmed);
  });
});
