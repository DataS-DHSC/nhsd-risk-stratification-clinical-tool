import { getAWSAccountId } from './aws/getAWSAccountId';
import { getS3Object } from './aws/getObjectS3';
import { newCache } from './cache';

const { promises: fsPromises } = require('fs');

const defaultCacheTime = 30000;

const getConfigFileName = () => {
  const environment =
    process.env.ENVIRONMENT_CONFIG || process.env.ENVIRONMENT || 'unknown';

  if (environment.split('-')[0] === 'de') return 'config.dynamic.json';

  return `config.${environment}.json`;
};

let configLocal;
const fetch = async () => {
  if (
    process.env.ENVIRONMENT_CONFIG &&
    process.env.ENVIRONMENT_CONFIG === 'local'
  ) {
    if (!configLocal) {
      configLocal = JSON.parse(
        await fsPromises.readFile('config.local.json', 'utf-8')
      );
    }
    return {
      value: configLocal,
      cacheTime: configLocal.cacheTime || defaultCacheTime,
    };
  }

  const awsAccountId = await getAWSAccountId();
  const configFileName = getConfigFileName();
  const configJson = await getS3Object({
    Bucket: `${awsAccountId}-config-files`,
    Key: configFileName,
  });

  const config = JSON.parse(configJson);

  return {
    value: {
      featureFlags: config.featureFlags,
      urls: config.urls,
    },
    cacheTime: config.cacheTime || defaultCacheTime,
  };
};

const getCachedConfigAsync = newCache(() => new Date(), fetch);

export { getConfigFileName, getCachedConfigAsync };
