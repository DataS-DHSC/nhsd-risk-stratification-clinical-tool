import React from 'react';

const WarningBanner = () => (
  <div
    className="nhsuk-global-alert"
    id="nhsuk-global-alert"
    role="complementary"
  >
    <div className="nhsuk-width-container">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-full">
          <div className="nhsuk-global-alert__content">
            <div className="nhsuk-global-alert__message">
              <p>
                <strong>Important information:</strong> This is a prototype for
                demonstration purposes, not a functioning clinical tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WarningBanner;
