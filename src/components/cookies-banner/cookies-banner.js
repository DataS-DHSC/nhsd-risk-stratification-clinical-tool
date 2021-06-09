import React from 'react';
import SelectionBanner from './selection-banner';
import SuccessBanner from './success-banner';
import useRouterChangeComplete from './use-router-change-complete';
import { useCookiesContext } from '../../context/cookies-context';

const CookiesBanner = () => {
  const {
    isSelectionBannerVisible,
    isSuccessBannerVisible,
    showSuccessBanner,
    hideSuccessBanner,
  } = useCookiesContext();

  useRouterChangeComplete();

  const isRunningClientSide = typeof window !== 'undefined';
  if (!isRunningClientSide) {
    return null;
  }

  if (isSelectionBannerVisible()) {
    // No cookie preferences selected so far
    return <SelectionBanner showSuccessBanner={showSuccessBanner} />;
  }

  if (isSuccessBannerVisible) {
    return <SuccessBanner hideSuccessBanner={hideSuccessBanner} />;
  }

  return null;
};

export default CookiesBanner;
