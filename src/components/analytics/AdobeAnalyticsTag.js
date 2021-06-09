import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { adobeAnalyticsEnv } from './environments';

const scriptSources = {
  [adobeAnalyticsEnv.DEVELOPMENT]: '',
  [adobeAnalyticsEnv.STAGING]: '',
  [adobeAnalyticsEnv.LIVE]: '',
};

const AdobeAnalyticsTag = ({ isEnabled, environment }) => {
  if (!isEnabled) {
    return null;
  }

  if (!environment) {
    return null;
  }

  return (
    <Head>
      <script
        src={scriptSources[environment]}
        type="application/javascript"
        data-cookieconsent="statistics"
        async
      />
    </Head>
  );
};

AdobeAnalyticsTag.propTypes = {
  isEnabled: PropTypes.bool,
  environment: PropTypes.string,
};

AdobeAnalyticsTag.defaultProps = {
  isEnabled: false,
  environment: adobeAnalyticsEnv.DEVELOPMENT,
};

export default AdobeAnalyticsTag;
