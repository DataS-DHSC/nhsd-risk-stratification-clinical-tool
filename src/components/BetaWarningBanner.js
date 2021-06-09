import React from 'react';
import { ROUTE_FEEDBACK } from '../constants/routes';

const BetaWarningBanner = () => (
  <div className="top-banner">
    <div className="nhsuk-width-container" id="beta-warning-banner">
      <strong className="status-box status-box-blue">BETA</strong>
      <span>
        {' '}
        We want to hear from you. Give us{' '}
        <a
          href={`${ROUTE_FEEDBACK}`}
          target="_blank"
          rel="noreferrer noopener nofollow"
          id="beta-warning-banner-link"
        >
          feedback
        </a>{' '}
        to help us improve this service.
      </span>
    </div>
  </div>
);

export default BetaWarningBanner;
