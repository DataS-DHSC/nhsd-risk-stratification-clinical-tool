import HeadTags from '../../components/HeadTags';
import TermsOfUse from '../../components/page/TermsOfUse';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';

const TermsOfUsePage = () => (
  <>
    <HeadTags
      title="Terms of use"
      description="terms of use"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <TermsOfUse />
  </>
);

export default TermsOfUsePage;
