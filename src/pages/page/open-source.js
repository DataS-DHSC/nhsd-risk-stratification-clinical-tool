import HeadTags from '../../components/HeadTags';
import OpenSource from '../../components/page/OpenSource';
import { ADOBE_ANALYTICS_FEATURE_FLAG } from '../../constants/feature-flags';
import LicensesNpm from '../../resources/open-source/licenses-npm.json';
import LicensesNuGet from '../../resources/open-source/licenses-nuget.json';

const OpenSourcePage = () => (
  <>
    <HeadTags
      title="Open-source"
      description="open-source"
      featureFlags={{
        isAdobeAnalyticsEnabled: ADOBE_ANALYTICS_FEATURE_FLAG,
      }}
    />
    <OpenSource licenseMapArray={[LicensesNpm, LicensesNuGet]} />
  </>
);

export default OpenSourcePage;
