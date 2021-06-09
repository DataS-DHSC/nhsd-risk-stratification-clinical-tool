import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import Router from 'next/router';
import CookiesBanner from '../../../components/cookies-banner/cookies-banner';
import { CookiesContext } from '../../../context/cookies-context';

const setup = (contextProviderValue) =>
  render(
    <RouterContext.Provider value={Router}>
      <CookiesContext.Provider value={contextProviderValue}>
        <CookiesBanner />
      </CookiesContext.Provider>
    </RouterContext.Provider>
  );

describe('Cookies Banner', () => {
  it('should display SelectionBanner', () => {
    const contextProviderValue = {
      optIn: undefined,
      isSuccessBannerVisible: false,
      isSelectionBannerVisible: () => true,
    };
    const container = setup(contextProviderValue);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should display SuccessBanner', () => {
    const contextProviderValue = {
      optIn: true,
      isSuccessBannerVisible: true,
      isSelectionBannerVisible: () => false,
    };
    const container = setup(contextProviderValue);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should display nothing', () => {
    const contextProviderValue = {
      optIn: true,
      isSuccessBannerVisible: false,
      isSelectionBannerVisible: () => false,
    };
    const container = setup(contextProviderValue);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
