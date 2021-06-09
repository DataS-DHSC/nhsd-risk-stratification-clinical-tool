import { getConfigFileName } from '../../utils/configCache';

describe('getConfigFileName', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
    process.env.ENVIRONMENT_CONFIG = undefined;
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it("if ENVIRONMENT_CONFIG undefiend and ENVIRONMENT 'de-foo' the returns configFileName 'config.dynamic.json'", async () => {
    process.env.ENVIRONMENT = 'de-foo';
    const configFileName = getConfigFileName();
    expect(configFileName).toEqual('config.dynamic.json');
  });

  it("if ENVIRONMENT_CONFIG undefiend and ENVIRONMENT 'perftest' the returns configFileName 'config.perftest.json'", async () => {
    process.env.ENVIRONMENT = 'perftest';
    const configFileName = getConfigFileName();
    expect(configFileName).toEqual('config.perftest.json');
  });

  it("if ENVIRONMENT_CONFIG 'dev' then returns configFileName 'config.dev.json'", async () => {
    process.env.ENVIRONMENT_CONFIG = 'dev';
    process.env.ENVIRONMENT = 'perftest';
    const configFileName = getConfigFileName();
    expect(configFileName).toEqual('config.dev.json');
  });
});
