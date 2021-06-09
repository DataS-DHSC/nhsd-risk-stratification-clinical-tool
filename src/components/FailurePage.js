import React from 'react';
import PropTypes from 'prop-types';
import { ROUTE_SUPPORT_FORM } from '../constants/routes';

const FailureSummary = ({ correlationId }) => (
  <div className="nhsuk-grid-row">
    <div className="nhsuk-grid-column-full">
      <h1 className="page-title" id="failed-to-generate-score-heading">
        Failed to generate a result
      </h1>
      <h2 id="reasons-for-failure-heading">This might be because</h2>
      <ul>
        <li>There is a temporary fault with this service, or</li>
        <li>You have been linked to this service incorrectly</li>
      </ul>
      <h2 id="other-options-heading">
        Please try the following options instead
      </h2>
      <ul>
        <li>Try again later</li>
      </ul>
    </div>
    <div className="nhsuk-grid-column-two-thirds">
      <p id="temporary-problem-message">
        If you see this message consistently, please contact the{' '}
        <a
          rel="noreferrer nofollow noopener"
          target="_blank"
          href={encodeURI(
            `${ROUTE_SUPPORT_FORM}?correlationId=${correlationId}`
          )}
          id="helpdesk-link"
        >
          helpdesk
        </a>
        {correlationId && ` and quote correlation id: ${correlationId}`}
      </p>

      <a
        href="/ras/qcovid"
        className="nhsuk-u-margin-top-5 nhsuk-u-font-size-19"
        id="new-assessment-link"
      >
        Start a new COVID-19 risk assessment
      </a>
    </div>
  </div>
);

FailureSummary.propTypes = {
  correlationId: PropTypes.string.isRequired,
};

export default FailureSummary;
