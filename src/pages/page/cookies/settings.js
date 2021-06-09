import React from 'react';
import CookieSettings from '../../../components/page/CookieSettings';
import HeadTags from '../../../components/HeadTags';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../../constants/feature-flags';

const CookieSettingsPage = () => (
  <>
    <HeadTags
      title="Cookies Settings"
      description="cookies settings"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <CookieSettings />
  </>
);

export default CookieSettingsPage;
