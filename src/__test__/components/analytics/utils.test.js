import {
  getCurrentClientAppEnv,
  isAdobeAnalyticsEnabled,
  getPageName,
  getCurrentAdobeAnalyticsEnv,
  getCategory,
} from '../../../components/analytics/utils';
import {
  adobeAnalyticsEnv,
  clientAppEnv,
} from '../../../components/analytics/environments';

describe('Analytics/utils', () => {
  describe('getCurrentclientAppEnv', () => {
    it('should return null when origin is undefined, null or empty string', () => {
      expect(getCurrentClientAppEnv(undefined)).toBe(null);
      expect(getCurrentClientAppEnv(null)).toBe(null);
      expect(getCurrentClientAppEnv('')).toBe(null);
    });

    it('should return null when origin is not included in any of the permitted environments', () => {
      const result = getCurrentClientAppEnv(
        'https://cdn.infradev.riskstrat.nhs.uk'
      );
      expect(result).toBe(null);
    });

    const possibleEnvs = [
      { name: null, url: 'http://localhost:3010' },
      { name: clientAppEnv.PROD, url: 'https://beta.covidrisk.nhs.uk' },
      { name: clientAppEnv.REF, url: 'https://ref.covidrisk.nhs.uk' },
      {
        name: clientAppEnv.DEMO,
        url: 'https://cdn.demo.riskstrat.nhs.uk',
      },
      {
        name: clientAppEnv.UAT,
        url: 'https://cdn.uat.riskstrat.nhs.uk',
      },
      {
        name: clientAppEnv.INTERNAL_QA,
        url: 'https://cdn.internal-qa.riskstrat.nhs.uk',
      },
      {
        name: clientAppEnv.INTERNAL_DEV,
        url: 'https://cdn.internal-dev.riskstrat.nhs.uk',
      },
    ];

    possibleEnvs.forEach((env) => {
      it(`should return ${env.name} when origin is ${env.url}`, () => {
        const result = getCurrentClientAppEnv(env.url);
        expect(result).toBe(env.name);
      });
    });
  });

  describe('getPageName', () => {
    it('should return nhs:risk when path is undefined, null or empty string', () => {
      expect(getPageName(undefined)).toBe('nhs:risk');
      expect(getPageName(null)).toBe('nhs:risk');
      expect(getPageName('')).toBe('nhs:risk');
    });

    it('should append landing-page when there is only a forward slash in path', () => {
      const result = getPageName('/');
      expect(result).toBe('nhs:risk:landing-page');
    });

    it('should append the path with slash to nhs:risk basePageName', () => {
      const result = getPageName('/this-page');
      expect(result).toBe('nhs:risk:this-page');
    });

    it('should append the path without slash to nhs:risk basePageName', () => {
      const result = getPageName('this-page');
      expect(result).toBe('nhs:risk:this-page');
    });

    it('should append more complex paths correctly to nhs:risk basePageName', () => {
      const result = getPageName('page/this-page/sub-page');
      expect(result).toBe('nhs:risk:page:this-page:sub-page');
    });
  });

  describe('getCategory', () => {
    it('should return empty object when path does not exist', () => {
      expect(getCategory(undefined)).toEqual({});
      expect(getCategory(null)).toEqual({});
      expect(getCategory('')).toEqual({});
    });

    it('should return landing-page as primaryCategory when path is /', () => {
      const result = getCategory('/');
      expect(result).toEqual({
        primaryCategory: 'landing-page',
      });
    });

    it('should return path as primaryCategory if there is only one element in path', () => {
      const result = getCategory('/this-page');
      expect(result).toEqual({
        primaryCategory: 'this-page',
      });
    });

    it('should compose primaryCategory and subCategories correctly when path is complex', () => {
      const result = getCategory('/page/this-page/sub-page/index');
      expect(result).toEqual({
        primaryCategory: 'page',
        subCategory2: 'this-page',
        subCategory3: 'sub-page',
        subCategory4: 'index',
      });
    });
  });

  describe('isAdobeAnalyticsEnabled', () => {
    it('should return false when optIn is undefined', () => {
      const result = isAdobeAnalyticsEnabled(undefined);
      expect(result).toBe(false);
    });

    it('should return false when optIn is false', () => {
      const result = isAdobeAnalyticsEnabled(false);
      expect(result).toBe(false);
    });

    it('should return false when optIn is false as string', () => {
      const result = isAdobeAnalyticsEnabled('false');
      expect(result).toBe(false);
    });

    it('should return false when optIn is any random string', () => {
      const result = isAdobeAnalyticsEnabled('just-a-string');
      expect(result).toBe(false);
    });

    it('should return true when optIn is true', () => {
      const result = isAdobeAnalyticsEnabled(true);
      expect(result).toBe(true);
    });

    it('should return true when optIn is true as string', () => {
      const result = isAdobeAnalyticsEnabled('true');
      expect(result).toBe(true);
    });

    it('should return true when optIn is True or TRUE, not case-sensitive', () => {
      expect(isAdobeAnalyticsEnabled('True')).toBe(true);
      expect(isAdobeAnalyticsEnabled('TRUE')).toBe(true);
      expect(isAdobeAnalyticsEnabled('TruE')).toBe(true);
      expect(isAdobeAnalyticsEnabled('tRuE')).toBe(true);
    });
  });

  describe('getCurrentAdobeAnalyticsEnv', () => {
    it('should return null if origin does not exist', () => {
      expect(getCurrentAdobeAnalyticsEnv(undefined)).toBe(null);
      expect(getCurrentAdobeAnalyticsEnv(null)).toBe(null);
      expect(getCurrentAdobeAnalyticsEnv('')).toBe(null);
    });

    const possibleEnvs = [
      { name: null, url: 'http://localhost:3010' },
      { name: adobeAnalyticsEnv.LIVE, url: 'https://beta.covidrisk.nhs.uk' },
      {
        name: adobeAnalyticsEnv.LIVE,
        url: 'https://ref.covidrisk.nhs.uk',
      },
      {
        name: adobeAnalyticsEnv.STAGING,
        url: 'https://cdn.demo.riskstrat.nhs.uk',
      },
      {
        name: adobeAnalyticsEnv.STAGING,
        url: 'https://cdn.uat.riskstrat.nhs.uk',
      },
      {
        name: adobeAnalyticsEnv.DEVELOPMENT,
        url: 'https://cdn.internal-qa.riskstrat.nhs.uk',
      },
      {
        name: adobeAnalyticsEnv.DEVELOPMENT,
        url: 'https://cdn.internal-dev.riskstrat.nhs.uk',
      },
    ];

    possibleEnvs.forEach((env) => {
      it(`should return ${env.name} for ${env.url}`, () => {
        const result = getCurrentAdobeAnalyticsEnv(env.url);
        expect(result).toBe(env.name);
      });
    });
  });
});
