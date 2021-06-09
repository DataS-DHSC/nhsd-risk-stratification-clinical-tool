import HeadTags from '../../components/HeadTags';
import AccessDeniedPage from '../../components/page/AccessDeniedPage';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const Error403 = () => (
  <>
    <HeadTags
      title="Error 403"
      description="error 403"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <AccessDeniedPage />
  </>
);

export default Error403;
