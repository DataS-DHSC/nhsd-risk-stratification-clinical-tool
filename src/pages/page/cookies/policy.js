import HeadTags from '../../../components/HeadTags';
import CookiesPolicy from '../../../components/page/CookiesPolicy';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../../constants/feature-flags';

const CookiesPolicyPage = () => (
  <>
    <HeadTags
      title="Cookies policy"
      description="cookies policy"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <CookiesPolicy />
  </>
);

export default CookiesPolicyPage;
