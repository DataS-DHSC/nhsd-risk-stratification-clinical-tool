import { adobeAnalyticsEnv, clientAppEnv } from './environments';

const clientAppEnvs = {
  'https://beta.covidrisk.nhs.uk': clientAppEnv.PROD,
  'https://ref.covidrisk.nhs.uk': clientAppEnv.REF,
  'https://cdn.demo.riskstrat.nhs.uk': clientAppEnv.DEMO,
  'https://cdn.uat.riskstrat.nhs.uk': clientAppEnv.UAT,
  'https://cdn.internal-qa.riskstrat.nhs.uk': clientAppEnv.INTERNAL_QA,
  'https://cdn.internal-dev.riskstrat.nhs.uk': clientAppEnv.INTERNAL_DEV,
  'https://cdn.de-szke1.riskstrat.nhs.uk': clientAppEnv.DYNAMIC_ENV,
};

const adobeAnalyticsEnvs = {
  [clientAppEnv.PROD]: adobeAnalyticsEnv.LIVE,
  [clientAppEnv.REF]: adobeAnalyticsEnv.LIVE,
  [clientAppEnv.DEMO]: adobeAnalyticsEnv.STAGING,
  [clientAppEnv.UAT]: adobeAnalyticsEnv.STAGING,
  [clientAppEnv.INTERNAL_QA]: adobeAnalyticsEnv.DEVELOPMENT,
  [clientAppEnv.INTERNAL_DEV]: adobeAnalyticsEnv.DEVELOPMENT,
  [clientAppEnv.DYNAMIC_ENV]: adobeAnalyticsEnv.DEVELOPMENT,
};

const getCurrentClientAppEnv = (origin) => {
  // This code will shortly be replaced by getting the information from the meta config
  if (!origin) {
    return null;
  }

  return clientAppEnvs[origin] ?? null;
};

const getPathName = (path) => {
  const result = path.replace(/\//g, ':');
  if (result === ':') {
    return ':landing-page';
  }
  return result;
};

const getPageName = (path) => {
  const basePageName = 'nhs:risk';
  if (!path) {
    return basePageName;
  }

  const pathName = getPathName(path);

  if (pathName.startsWith(':')) {
    return `${basePageName}${getPathName(path)}`;
  }

  return `${basePageName}:${getPathName(path)}`;
};

const getCategory = (path) => {
  if (!path) {
    return {};
  }

  return getPathName(path)
    .split(':')
    .reduce((acc, category, index) => {
      if (index === 0) {
        return acc;
      }

      if (index === 1) {
        return {
          primaryCategory: category,
        };
      }

      return {
        ...acc,
        [`subCategory${index}`]: category,
      };
    }, {});
};

const isAdobeAnalyticsEnabled = (optIn) => {
  if (typeof optIn === 'string' || optIn instanceof String) {
    return optIn.toLowerCase().trim() === 'true';
  }
  return optIn === true;
};

const getCurrentAdobeAnalyticsEnv = (origin) => {
  if (!origin) {
    return null;
  }

  return adobeAnalyticsEnvs[getCurrentClientAppEnv(origin)] ?? null;
};

export {
  getCurrentClientAppEnv,
  getPageName,
  getCategory,
  isAdobeAnalyticsEnabled,
  getCurrentAdobeAnalyticsEnv,
};
