import React from 'react';
import ReleaseVersion from '../ReleaseVersion';
import SiteBrandingTitle from '../SiteBrandingTitle';
import { MHRA_REVISION } from '../../constants/mhraRevision';

export const ProductDetails = () => (
  <>
    <div className="nhsuk-summary-list__row">
      <dt className="nhsuk-summary-list__key legal-list__title">
        <img src="/icons/ce-catalogue.svg" alt="Catalogue number" />
      </dt>
      <dt className="nhsuk-summary-list__key">Catalogue number</dt>
      <dd className="nhsuk-summary-list__value">
        <SiteBrandingTitle isMHRARegisteredName />
      </dd>
    </div>
    <div className="nhsuk-summary-list__row" id="release-version-number">
      <dt className="nhsuk-summary-list__key legal-list__title">
        <img src="/icons/ce-lot.svg" alt="Lot number" />
      </dt>
      <dt className="nhsuk-summary-list__key">{`Release ${MHRA_REVISION}`}</dt>
      <dd className="nhsuk-summary-list__value">
        <ReleaseVersion />
      </dd>
    </div>
  </>
);
