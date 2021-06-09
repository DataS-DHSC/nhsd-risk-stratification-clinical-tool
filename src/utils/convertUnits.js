import convert from 'convert-units';
import PropTypes from 'prop-types';

const ConvertUnits = (value, conversion, dp) => {
  if (conversion === 'kg-to-st-lb') {
    const totalLbs = convert(value).from('kg').to('lb');
    const lb = (totalLbs % 14).toFixed(dp);
    const st = Math.floor(totalLbs / 14);
    return {
      label: `${st}st ${lb}lb`,
      ariaLabel: `${st} stone ${lb} pounds`,
    };
  }

  if (conversion === 'cm-to-ft-in') {
    const totalInches = convert(value).from('cm').to('in');
    const inch = (totalInches % 12).toFixed(dp);
    const ft = Math.floor(totalInches / 12);
    return {
      label: `${ft}ft ${inch}in`,
      ariaLabel: `${ft} feet ${inch} inches`,
    };
  }

  return '';
};

ConvertUnits.propTypes = {
  value: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  dp: PropTypes.number.isRequired,
};

export default ConvertUnits;
