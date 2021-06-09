import { getUrl } from './configCacheHandler';

function handleServerSideRedirect(configUrl) {
  return async () => {
    const url = await getUrl(configUrl);
    if (url) {
      return {
        redirect: {
          destination: url,
          permanent: false,
        },
      };
    }
    return { props: { statusCode: 503 } };
  };
}

export default handleServerSideRedirect;
