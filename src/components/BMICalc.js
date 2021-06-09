import React from 'react';
import PropTypes from 'prop-types';
import CalcBMI from '../utils/calcBMI';

const BMICalc = ({ field, linkedValues, groupName }) => {
  const arg1 = linkedValues.find((item) => item.groupName === field.links[0]);
  const arg2 = linkedValues.find((item) => item.groupName === field.links[1]);

  const calculatedBmi = CalcBMI(arg1.value, arg2.value, 2);
  /* Ensure the continue button doesn't bounce around when BMI is computed. */
  const legend = calculatedBmi ? field.label : '\u00A0';
  return (
    <p name={groupName} id={groupName}>
      {legend}
      <strong>{arg1 && arg2 ? calculatedBmi : ''}</strong>
    </p>
  );
};

BMICalc.propTypes = {
  field: PropTypes.shape().isRequired,
  linkedValues: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  groupName: PropTypes.string.isRequired,
};

export default BMICalc;
