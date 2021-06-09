import Accessibility from '../../components/page/Accessibility';
import HeadTags from '../../components/HeadTags';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const AccessibilityPage = () => (
  <>
    <HeadTags
      title="Accessibility statement"
      description="accessibility statement"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <Accessibility />
  </>
);

export default AccessibilityPage;
