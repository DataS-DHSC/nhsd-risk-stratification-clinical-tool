import React from 'react';
import { useFetch } from '../utils/hooks';

const ReleaseVersion = () => {
  const [siteData, loading] = useFetch({ url: '/metadata/site-data.json' });
  return (
    <>
      {`Version ${
        loading
          ? '==REPLACE_RELEASE_VERSION_TOKEN=='
          : siteData['release-version']
      }`}
    </>
  );
};

export default ReleaseVersion;
