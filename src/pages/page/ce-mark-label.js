import HeadTags from '../../components/HeadTags';
import CELabel from '../../components/page/CELabel';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const CEMarkPage = () => (
  <>
    <HeadTags
      title="Legal information"
      description="This device fulfils the provisions of the European Commission (EC) Directive 93/42/EEC (Medical Devices Directive)"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <CELabel />
  </>
);

export default CEMarkPage;
