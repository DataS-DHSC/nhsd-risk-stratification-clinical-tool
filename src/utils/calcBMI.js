import calcBmi from 'bmi-calc';
import PropTypes from 'prop-types';

const CalcBMI = (weightKg, heightCm, dp) => {
  if (weightKg < 1 || heightCm < 1) return '';

  const result = calcBmi(weightKg, heightCm / 100, false);

  if (result.value) {
    return result.value.toFixed(dp);
  }

  return false;
};

CalcBMI.propTypes = {
  weightKg: PropTypes.number.isRequired,
  heightCm: PropTypes.number.isRequired,
};

export default CalcBMI;
