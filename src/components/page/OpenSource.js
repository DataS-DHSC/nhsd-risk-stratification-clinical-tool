import { Details } from 'nhsuk-react-components';
import React from 'react';
import PropTypes from 'prop-types';
import PageReviewDates from '../PageReviewDates';
import SiteBrandingTitle from '../SiteBrandingTitle';

const OpenSource = ({ licenseMapArray }) => {
  const licenseWithWarning = ['GPL3', 'Unknown'];

  const dependencies = licenseMapArray.flatMap((licenseMap) =>
    Object.entries(licenseMap).map(([key, value]) => [
      value.licenses ?? 'Unknown',
      key,
    ])
  );
  const licenses = [...new Set(dependencies.map((d) => d[0]))].sort();

  const openSourceSummaries = licenses.map((license, index) => (
    <Details id={`nhsuk-details${index}`} key={`nhsuk-details-${license}`}>
      <Details.Summary
        id={`nhsuk-details__summary${index}`}
        role="button"
        tabIndex="0"
        aria-expanded="true"
        className={
          licenseWithWarning.includes(license) ? 'warning-license' : ''
        }
        aria-controls={`nhsuk-details__text${index}`}
      >
        {license}
      </Details.Summary>
      <Details.Text id={`nhsuk-details__text${index}`}>
        <p id={`nhsuk-details__content${index}`}>
          {dependencies
            .filter((dependency) => dependency[0] === license)
            .map((d) => d[1])
            .join(', ')}
        </p>
      </Details.Text>
    </Details>
  ));

  return (
    <>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>
            Open-source licenses for the <SiteBrandingTitle isDefaultName />
          </h1>
          {openSourceSummaries}
          <a
            className="nhsuk-body-m license-definitions"
            href="https://spdx.org/licenses/"
            target="_self"
            rel="noopener noreferrer nofollow"
          >
            License definitions.
          </a>
        </div>
      </div>
      <PageReviewDates page="static" />
    </>
  );
};

OpenSource.propTypes = {
  licenseMapArray: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default OpenSource;
