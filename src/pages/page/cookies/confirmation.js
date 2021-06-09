import React from 'react';
import { CookieConfirmationPage } from '../../../components/page/CookieConfirmationPage';
import HeadTags from '../../../components/HeadTags';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../../constants/feature-flags';

const ConfirmationPage = () => (
  <>
    <HeadTags
      title="Cookies confirmation"
      description="cookies confirmation"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <CookieConfirmationPage />
  </>
);

export default ConfirmationPage;
