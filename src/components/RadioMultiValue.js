import React from 'react';
import { Fieldset, Radios } from 'nhsuk-react-components';
import PropTypes from 'prop-types';

const RadioMultiValue = ({ field, groupName, prevData, setField }) => (
  <Fieldset>
    <Fieldset.Legend
      id={`${field.label.toLowerCase().replace(/ /g, '-')}-radios-label`}
    >
      {field.label}
    </Fieldset.Legend>

    <Radios
      id={groupName}
      name={groupName}
      hint={field.hint || ''}
      inline={field.inline}
    >
      {field.options.map((option) => (
        <Radios.Radio
          key={`${groupName}-${option.name}`}
          id={`${groupName}-${option.name}`}
          value={`${option.name}`}
          defaultChecked={
            prevData[groupName.toString()]
              ? prevData[groupName.toString()] === `${option.name}`
              : field.default === `${option.name}`
          }
          required
          onClick={() => setField(groupName, option.name)}
        >
          {option.label}
        </Radios.Radio>
      ))}
    </Radios>
  </Fieldset>
);
RadioMultiValue.propTypes = {
  field: PropTypes.shape().isRequired,
  prevData: PropTypes.shape(),
  groupName: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
};

RadioMultiValue.defaultProps = {
  prevData: {},
};

export default RadioMultiValue;
