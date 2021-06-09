import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

function parseCookie(str) {
  switch (str) {
    case 'true':
      return true;
    case 'false':
      return false;
    case undefined:
      return undefined;
    default:
      // eslint-disable-next-line no-console
      console.error(`Unable to parse opt-in value ${str}`);
      return undefined;
  }
}

export const CookiesContext = createContext({
  optIn: undefined,
  setOptIn: () => {
    throw Error(
      'setOptIn function not defined, make sure to use context provider'
    );
  },
  hideSuccessBanner: () => {
    throw Error(
      'hideSuccessBanner function not defined, make sure to use context provider'
    );
  },
  showSuccessBanner: () => {
    throw Error(
      'showSuccessBanner function not defined, make sure to use context provider'
    );
  },
  isSuccessBannerVisible: undefined,
  isSelectionBannerVisible: () => {
    throw Error(
      'isSelectionBannerVisible function not defined, make sure to use context provider'
    );
  },
});

export const useCookiesContext = () => useContext(CookiesContext);

export default function CookiesContextProvider({ children, getCookie }) {
  const [optIn, setOptIn] = useState(parseCookie(getCookie('opt-in')));

  const [isSuccessBannerVisible, setIsSuccessBannerVisible] = useState(false);
  const hideSuccessBanner = () => setIsSuccessBannerVisible(false);
  const showSuccessBanner = () => setIsSuccessBannerVisible(true);

  const isSelectionBannerVisible = () => optIn === undefined;

  return (
    <CookiesContext.Provider
      value={{
        optIn,
        setOptIn,
        hideSuccessBanner,
        showSuccessBanner,
        isSuccessBannerVisible,
        isSelectionBannerVisible,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
}

CookiesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  getCookie: PropTypes.func.isRequired,
};
