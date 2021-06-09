import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fieldset, Input } from 'nhsuk-react-components';

const TextInput = ({ field, required, prevData, groupName, setField }) => {
  const { label, hint, fieldValidator } = field;

  const [localValue, setLocalValue] = useState(prevData[groupName]);

  const handleOnInput = (e) => {
    if (fieldValidator) {
      const errorMessage = fieldValidator(e.target.value);
      e.target.setCustomValidity(errorMessage);
    }
  };

  const onChangeHandler = (e) => {
    setLocalValue(e.target.value);
    setField(groupName, e.target.value);
  };

  const onBlurHandler = (e) => {
    if (e.target.value) {
      setLocalValue(e.target.value.trim());
      setField(groupName, e.target.value.trim());
    }
  };

  return (
    <Fieldset>
      <Fieldset.Legend className="hidden">{label}</Fieldset.Legend>

      <label
        htmlFor={groupName}
        className="nhsuk-heading-xs nhsuk-u-font-weight-bold nhsuk-u-margin-bottom-2"
        id={`${field.label.toLowerCase().replace(/ /g, '-')}-radios-label`}
      >
        {label}
      </label>

      <Input
        className="nhsuk-input nhsuk-input--width-10"
        autoComplete="off"
        id={groupName}
        name={groupName}
        type="text"
        hint={hint}
        value={localValue}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        required={required}
        onInput={handleOnInput}
      />
    </Fieldset>
  );
};

TextInput.propTypes = {
  field: PropTypes.shape().isRequired,
  prevData: PropTypes.shape(),
  groupName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  setField: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  prevData: {},
  required: false,
};

export default TextInput;
