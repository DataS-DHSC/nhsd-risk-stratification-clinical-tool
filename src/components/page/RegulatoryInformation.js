import React from 'react';

export const RegulatoryInformation = () => (
  <>
    <p>This software product has been designed according to:</p>
    <dl className="nhsuk-summary-list">
      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key legal-list__title" />
        <dt className="nhsuk-summary-list__key">ISO 13485:2016</dt>
        <dd className="nhsuk-summary-list__value">
          Medical devices - Quality management systems - Requirements for
          regulatory purposes.
        </dd>
      </div>

      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key legal-list__title" />
        <dt className="nhsuk-summary-list__key">
          <a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb0129-clinical-risk-management-its-application-in-the-manufacture-of-health-it-systems">
            DBC0129
          </a>
        </dt>
        <dd className="nhsuk-summary-list__value">
          Clinical Risk Management: its Application in the Manufacture of Health
          IT Systems.
        </dd>
      </div>

      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key legal-list__title" />
        <dt className="nhsuk-summary-list__key">
          <a href="https://digital.nhs.uk/data-and-information/information-standards/information-standards-and-data-collections-including-extractions/publications-and-notifications/standards-and-collections/dcb0160-clinical-risk-management-its-application-in-the-deployment-and-use-of-health-it-systems">
            DCB0160
          </a>
        </dt>
        <dd className="nhsuk-summary-list__value">
          Clinical Risk Management: its Application in the Deployment and Use of
          Health IT Systems
        </dd>
      </div>

      <div className="nhsuk-summary-list__row">
        <dt className="nhsuk-summary-list__key legal-list__title" />
        <dt className="nhsuk-summary-list__key">IEC 62304:2006 Amd 1:2015</dt>
        <dd className="nhsuk-summary-list__value">
          Medical device software – Software lifecycle processes.
        </dd>
      </div>
    </dl>
  </>
);
