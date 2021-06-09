import React from 'react';
import PropTypes from 'prop-types';

const RiskPanel = ({ riskType, probability, relativeRisk }) => (
  <>
    <ul>
      <li id={`absolute-risk-${riskType}`}>
        Absolute risk:{' '}
        <strong>{`${probability}% (1 in ${(100 / probability).toFixed(
          0
        )})`}</strong>
      </li>
      <li id={`relative-risk-${riskType}`}>
        Relative risk: <strong>{relativeRisk}</strong>
      </li>
    </ul>
  </>
);

RiskPanel.propTypes = {
  riskType: PropTypes.string.isRequired,
  probability: PropTypes.number.isRequired,
  relativeRisk: PropTypes.string.isRequired,
};

export default RiskPanel;
