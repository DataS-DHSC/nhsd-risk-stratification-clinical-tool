import Head from 'next/head';
import PropTypes from 'prop-types';
import { SITE_BRANDING_TITLE } from '../constants/site-branding';
import AdobeAnalytics from './analytics/AdobeAnalytics';

const HeadTags = ({ title, description, featureFlags }) => (
  <>
    <Head>
      <title>
        {SITE_BRANDING_TITLE} {title ? ` - ${title}` : ''}
      </title>
      <meta
        name="description"
        content={`${SITE_BRANDING_TITLE} ${description}`}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <AdobeAnalytics featureFlags={featureFlags} />
  </>
);

HeadTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featureFlags: PropTypes.shape(),
};

HeadTags.defaultProps = {
  title: undefined,
  description: undefined,
  featureFlags: {},
};

export default HeadTags;
