import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fieldset, Input } from 'nhsuk-react-components';
import ConvertUnits from '../utils/convertUnits';

const NumericInput = ({
  field,
  prevData,
  required,
  groupName,
  changeCallback,
  setField,
}) => {
  const { label, ariaLabel, hint, hintAriaLabel, min, max, conversion } = field;

  const [localValue, setLocalValue] = useState(prevData[groupName]);

  const onChangeHandler = (e) => {
    setLocalValue(e.target.value);
    setField(groupName, e.target.value);
    changeCallback(groupName, e.target.value);
  };

  const onBlurHandler = (e) => {
    if (e.target.value) {
      setLocalValue(e.target.value);
      setField(groupName, Number(e.target.value).toString());
    }
  };

  const convertedUnits = ConvertUnits(localValue, conversion, 0);

  return (
    <Fieldset>
      <Fieldset.Legend className="hidden">{label}</Fieldset.Legend>

      <label
        className="nhsuk-heading-xs nhsuk-u-font-weight-bold nhsuk-u-margin-bottom-2"
        htmlFor={groupName}
        aria-label={`${ariaLabel}${required ? '' : ' (optional)'}`}
        id={`${field.label.toLowerCase().replace(/ /g, '-')}-radios-label`}
      >
        {`${label}${required ? '' : ' (optional)'}`}
      </label>
      <span
        className="nhsuk-hint"
        id={`${groupName}--hint`}
        aria-label={hintAriaLabel}
      >
        {hint}
      </span>
      <Input
        className="numeric-input nhsuk-input nhsuk-input--width-4"
        autoComplete="off"
        name={groupName}
        id={groupName}
        type="number"
        value={localValue}
        min={min}
        max={max}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        required={required}
      />
      {conversion && localValue && (
        <div className="numeric-input-conversion">
          <span
            name={`${groupName}-conversion`}
            id={`${groupName}-conversion`}
            className="nhsuk-hint"
            aria-label={`(${convertedUnits.ariaLabel})`}
          >
            {`(${convertedUnits.label})`}
          </span>
        </div>
      )}
    </Fieldset>
  );
};

NumericInput.propTypes = {
  field: PropTypes.shape().isRequired,
  prevData: PropTypes.shape(),
  groupName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  changeCallback: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
};

NumericInput.defaultProps = {
  prevData: {},
  required: false,
};

export default NumericInput;
