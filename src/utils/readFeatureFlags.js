import { isFeatureEnabled } from './configCacheHandler';

export default async function readFeatureFlags() {
  // Adobe Analytics Feature Flag
  let adobeAnalytics = false;
  try {
    adobeAnalytics = await isFeatureEnabled('adobeAnalytics');
  } catch (err) {
    console.log('error is', err);
    // If facing issues with enabling this feature
    // check you process.env.ENVIRONMENT_CONFIG value
    adobeAnalytics = false;
  }

  return {
    isAdobeAnalyticsEnabled: adobeAnalytics,
  };
}
