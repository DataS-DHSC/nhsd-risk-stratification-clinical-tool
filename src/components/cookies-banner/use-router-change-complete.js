import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookiesContext } from '../../context/cookies-context';

export default function useRouterChangeComplete() {
  const router = useRouter();

  const { hideSuccessBanner } = useCookiesContext();

  useEffect(() => {
    router.events.on('routeChangeComplete', hideSuccessBanner);
    return () => {
      router.events.off('routerChangeComplete', hideSuccessBanner);
    };
  }, []);
}
