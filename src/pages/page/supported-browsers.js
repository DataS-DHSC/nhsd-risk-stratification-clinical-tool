import HeadTags from '../../components/HeadTags';
import SupportedBrowsers from '../../components/page/SupportedBrowsers';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const SupportedBrowsersPage = () => (
  <>
    <HeadTags
      title="Supported browsers"
      description="supported browsers"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <SupportedBrowsers />
  </>
);

export default SupportedBrowsersPage;
