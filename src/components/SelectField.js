import React from 'react';
import { Select } from 'nhsuk-react-components';
import PropTypes from 'prop-types';

const SelectField = ({ field, groupName, prevData, required, setField }) => {
  const { label, options, hint } = field;

  return (
    <Select
      className="nhsuk-select"
      id={groupName}
      name={groupName}
      disabled={field.disabled}
      hint={hint}
      label={label}
      defaultValue={
        prevData[groupName] ||
        (options[0].options[0].name === 'please-select'
          ? ''
          : options[0].options[0].name.toString())
      }
      required={required}
      onChange={(e) => setField(groupName, e.target.value)}
    >
      {options.map((optgroup) => {
        const subOptions = optgroup.options.map((option) => (
          <option
            key={`option-${option.name}`}
            value={
              option.name === 'please-select' ? '' : option.name.toString()
            }
          >
            {option.label}
          </option>
        ));

        return optgroup.label !== '' ? (
          <optgroup label={optgroup.label} key={`optgroup-${optgroup.label}`}>
            {subOptions}
          </optgroup>
        ) : (
          subOptions
        );
      })}
    </Select>
  );
};

SelectField.propTypes = {
  field: PropTypes.shape().isRequired,
  prevData: PropTypes.shape(),
  groupName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  setField: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  prevData: {},
  required: false,
};

export default SelectField;
