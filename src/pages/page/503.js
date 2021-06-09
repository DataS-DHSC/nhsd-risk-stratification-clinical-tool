import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const Error503 = () => (
  <>
    <HeadTags
      title="Error 503"
      description="error 503"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <ErrorPage statusCode={503} />
  </>
);

export default Error503;
