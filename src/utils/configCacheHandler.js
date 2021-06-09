import { getCachedConfigAsync } from './configCache';

const isFeatureEnabled = async (flag) => {
  const config = await getCachedConfigAsync('config');
  if (config.featureFlags) return config.featureFlags[flag];
  return null;
};

const getUrl = async (link) => {
  const config = await getCachedConfigAsync('config');
  if (config.urls) return config.urls[link];
  return null;
};

export { isFeatureEnabled, getUrl };
