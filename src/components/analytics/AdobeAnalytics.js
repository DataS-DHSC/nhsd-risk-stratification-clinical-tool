import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import AdobeAnalyticsTag from './AdobeAnalyticsTag';
import {
  getPageName,
  getCategory,
  isAdobeAnalyticsEnabled,
  getCurrentAdobeAnalyticsEnv,
  getCurrentClientAppEnv,
} from './utils';

const isBrowser = () => typeof window !== 'undefined';

const AdobeAnalytics = ({ featureFlags }) => {
  const [origin, setOrigin] = useState();
  const isAdobeAnalyticsFeatureEnabled = featureFlags.isAdobeAnalyticsEnabled;

  useEffect(() => {
    if (!isBrowser()) {
      return;
    }

    setOrigin(window.location.origin);

    const pathName = window.location.pathname;
    window.digitalData = {
      page: {
        pageInfo: {
          pageName: getPageName(pathName),
        },
        category: {
          ...getCategory(pathName),
          subCategory1: getCurrentClientAppEnv(window.location.origin),
        },
      },
    };
  }, [featureFlags]);

  return (
    <AdobeAnalyticsTag
      isEnabled={
        isAdobeAnalyticsFeatureEnabled &&
        isAdobeAnalyticsEnabled(cookie.load('opt-in'))
      }
      environment={getCurrentAdobeAnalyticsEnv(origin)}
    />
  );
};

AdobeAnalytics.propTypes = {
  featureFlags: PropTypes.shape(),
};

AdobeAnalytics.defaultProps = {
  featureFlags: {},
};

export default AdobeAnalytics;
