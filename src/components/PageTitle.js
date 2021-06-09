import PropTypes from 'prop-types';
import React from 'react';

const PageTitle = ({ label }) => (
  <h1
    id={`${label.toLowerCase().replace(/ /g, '-')}-page-heading`}
    className="nhsuk-fieldset__legend--l"
  >
    {label}
  </h1>
);

PageTitle.propTypes = { label: PropTypes.string.isRequired };

export default PageTitle;
