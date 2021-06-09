import PropTypes from 'prop-types';
import HeadTags from '../../components/HeadTags';
import ErrorPage from '../../components/page/ErrorPage';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const Error400 = ({ startAgainLink }) => (
  <>
    <HeadTags
      title="Error 400"
      description="error 400"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <body>
      <ErrorPage statusCode={400} startAgainLink={startAgainLink} />
    </body>
  </>
);

Error400.propTypes = {
  startAgainLink: PropTypes.string,
};

Error400.defaultProps = {
  startAgainLink: '',
};

export default Error400;
