import { Readable } from 'stream';
import { isFeatureEnabled, getUrl } from '../../utils/configCacheHandler';
import { getCachedConfigAsync } from '../../utils/configCache';
import { s3 } from '../../utils/aws/getObjectS3';
import { sts } from '../../utils/aws/getAWSAccountId';

describe('configCacheHandler', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
    process.env.ENVIRONMENT_CONFIG = undefined;
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  const result = JSON.stringify({
    featureFlags: {
      testFlagTrue: true,
      testFlagFalse: false,
    },
    urls: {
      publicSurvey: 'test-url',
    },
    cacheTime: 200,
  });

  s3.send = jest.fn().mockReturnValue({ Body: Readable.from([result]) });

  sts.send = jest.fn().mockReturnValue('123456');

  it('if config known true flag returns true', async () => {
    const testFlagTrue = await isFeatureEnabled('testFlagTrue');
    expect(testFlagTrue).toEqual(true);
  });

  it('if config known false flag returns false', async () => {
    const testFlagFalse = await isFeatureEnabled('testFlagFalse');
    expect(testFlagFalse).toEqual(false);
  });

  it('if config unknown flag returns false', async () => {
    const unknownFlag = await isFeatureEnabled('unknownFlag');
    expect(unknownFlag).toEqual(undefined);
  });

  it('works if env does not have feature flags', async () => {
    const resultEnvNoFeatureFlags = JSON.stringify({
      cacheTime: 200,
    });

    s3.getObject = () => ({
      promise: () =>
        Promise.resolve({ Body: Readable.from([resultEnvNoFeatureFlags]) }),
    });

    const flag = await isFeatureEnabled('flag');
    expect(flag).toEqual(undefined);
  });

  it('if has a config link returns link', async () => {
    const publicSurveyUrl = await getUrl('publicSurvey');
    expect(publicSurveyUrl).toEqual('test-url');
  });

  it('if link not in config returns undefined', async () => {
    const unknownUrl = await getUrl('unknownLink');
    expect(unknownUrl).toEqual(undefined);
  });

  it('if no config urls returns undefined ', async () => {
    getCachedConfigAsync.getUrl = () => ({
      promise: () => Promise.resolve(undefined),
    });
    const undefinedConfig = await getUrl('link');
    expect(undefinedConfig).toEqual(undefined);
  });

  it('if no config flags returns undefined ', async () => {
    getCachedConfigAsync.isFeatureEnabled = () => ({
      promise: () => Promise.resolve(undefined),
    });
    const undefinedConfig = await isFeatureEnabled('flag');
    expect(undefinedConfig).toEqual(undefined);
  });
});
