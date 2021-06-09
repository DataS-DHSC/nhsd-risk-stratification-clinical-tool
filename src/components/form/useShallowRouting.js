import { useRouter } from 'next/router';

/**
 * React hook to generate an onClick handler function; for use any form button
 * or link to navigate back and forward amongst form pages.
 *
 * Uses nextjs 'shallow routing' functionality, we do this to avoid extraineious data
 * fetches the server.
 */
const useShallowRouting = (formBaseUrl, targetPage) => {
  const router = useRouter();
  return (event) => {
    event.preventDefault();
    return router.push(
      {
        pathname: `${formBaseUrl}/${targetPage}`,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };
};

export default useShallowRouting;
