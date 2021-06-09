import React from 'react';
import { Fieldset, Radios } from 'nhsuk-react-components';
import PropTypes from 'prop-types';

const RadioYesNo = ({ field, groupName, prevData, setField }) => {
  const ariaLabel = field.ariaLabel || null;
  return (
    <Fieldset disabled={field.disabled}>
      <Fieldset.Legend
        id={`${field.label.toLowerCase().replace(/ /g, '-')}-radios-label`}
        aria-label={ariaLabel}
      >
        {field.label}
      </Fieldset.Legend>
      <Radios id={groupName} name={groupName} hint={field.hint || ''} inline>
        <Radios.Radio
          key={`${groupName}-yes`}
          id={`${groupName}-yes`}
          value
          defaultChecked={
            !field.disabled && prevData[groupName]
              ? prevData[groupName] === 'true'
              : field.default === 'true'
          }
          required
          onClick={() => setField(groupName, 'true')}
        >
          Yes
        </Radios.Radio>
        <Radios.Radio
          key={`${groupName}-no`}
          id={`${groupName}-no`}
          value={false}
          defaultChecked={
            !field.disabled && prevData[groupName]
              ? prevData[groupName] !== 'true'
              : field.default !== 'true'
          }
          required
          onClick={() => setField(groupName, 'false')}
        >
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
  );
};

RadioYesNo.propTypes = {
  field: PropTypes.shape().isRequired,
  prevData: PropTypes.shape(),
  groupName: PropTypes.string.isRequired,
  setField: PropTypes.func,
};

RadioYesNo.defaultProps = {
  prevData: {},
  setField: null,
};

export default RadioYesNo;
