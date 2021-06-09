import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const Error404 = () => (
  <>
    <HeadTags
      title="Error 404"
      description="error 404"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <ErrorPage statusCode={404} />
  </>
);

export default Error404;
