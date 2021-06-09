import React from 'react';
import PropTypes from 'prop-types';

const HiddenStateHolder = ({ stateFields }) => (
  <>
    {Object.entries(stateFields).map(([key, value]) => (
      <input
        key={`hidden-input-${key}`}
        type="hidden"
        name={key}
        value={value}
      />
    ))}
  </>
);

HiddenStateHolder.propTypes = {
  stateFields: PropTypes.shape().isRequired,
};

export default HiddenStateHolder;
