import React from 'react';
import PropTypes from 'prop-types';

function overrideWarningMessage(originalMessage) {
  let overriddenWarning = {};
  switch (originalMessage) {
    case 'The provided BMI is below the calculators range. The minimum valid BMI will be used instead.': // Adds apostrophe
      overriddenWarning =
        "The provided BMI is below the calculator's range. The minimum valid BMI will be used instead.";
      break;
    case 'The provided BMI is above the calculators range. The maximum valid BMI will be used instead.': // Adds apostrophe
      overriddenWarning =
        "The provided BMI is above the calculator's range. The maximum valid BMI will be used instead.";
      break;
    default:
      overriddenWarning = originalMessage;
  }
  return overriddenWarning;
}

const WarningPanel = ({ warnings }) => (
  <>
    {warnings.length > 0 ? (
      <div id="warning-panel" className="nhsuk-inset-text">
        <p>
          We used defaults for the values you did not enter, or were outside our
          range.
        </p>
        <p>We did this for:</p>
        <ul>
          {warnings.map((warning) => (
            <li
              key={warning.coding.code}
              id={`warning-${warning.coding.system}-${warning.coding.code}`}
            >
              {overrideWarningMessage(warning.message)}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ''
    )}
  </>
);

WarningPanel.propTypes = {
  warnings: PropTypes.arrayOf(
    PropTypes.shape({
      severity: PropTypes.string,
      message: PropTypes.string,
    })
  ),
};

WarningPanel.defaultProps = {
  warnings: [],
};

export default WarningPanel;
