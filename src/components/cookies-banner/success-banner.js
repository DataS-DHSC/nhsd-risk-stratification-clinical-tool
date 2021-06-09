import React from 'react';
import PropTypes from 'prop-types';

const SuccessBanner = ({ hideSuccessBanner }) => {
  const onHideThisMessageClick = (event) => {
    event.preventDefault();
    hideSuccessBanner();
  };

  return (
    <div id="nhsuk-success-banner" className="nhsuk-success-banner">
      <div className="nhsuk-width-container">
        <p
          id="nhsuk-success-banner__message"
          className="nhsuk-success-cookie-banner__message"
        >
          You can change your cookie settings at any time using our{' '}
          <a href="/page/cookies/policy">cookies page</a>.
        </p>
        <p
          id="nhsuk-success-banner-hide__message"
          className="nhsuk-success-cookie-banner__message"
        >
          <a href="" onClick={onHideThisMessageClick}>
            Hide this message
          </a>
        </p>
      </div>
    </div>
  );
};

SuccessBanner.propTypes = {
  hideSuccessBanner: PropTypes.func.isRequired,
};

export default SuccessBanner;
