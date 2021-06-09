import React from 'react';
import { Panel } from 'nhsuk-react-components';

const ServiceLimitationsPanel = () => (
  <Panel
    id="warning-panel"
    className="nhsuk-warning-callout nhsuk-u-margin-top-7 nhsuk-u-margin-bottom-4 nhsuk-u-padding-bottom-8"
  >
    <h3 id="warning-score-heading" className="nhsuk-warning-callout__label">
      Current limitations of this service
    </h3>
    <p>
      The service has been developed for use by clinicians and health care
      professionals. It should be used alongside clinical judgement.
    </p>
    <ul>
      <li id="limitation-underestimate">
        The service may currently underestimate the risk of COVID-19 to patients
        who were shielding during the first peak of the Coronavirus (COVID-19)
        pandemic
      </li>
      <li id="limitation-no-removal">
        Therefore this service should not currently be used to add or remove
        patients from the Shielded Patients List
      </li>
    </ul>
  </Panel>
);

export default ServiceLimitationsPanel;
