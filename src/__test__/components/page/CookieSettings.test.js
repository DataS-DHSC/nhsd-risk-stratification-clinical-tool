import React from 'react';
import { render } from '@testing-library/react';
import CookieSettings from '../../../components/page/CookieSettings';
import { CookiesContext } from '../../../context/cookies-context';

const customRender = (ui, { providerProps, ...renderOptions }) =>
  render(
    <CookiesContext.Provider {...providerProps}>{ui}</CookiesContext.Provider>,
    renderOptions
  );

describe('CookieSettings', () => {
  it('should match snapshot', () => {
    const providerProps = {
      value: { optIn: true, setOptIn: () => {} },
    };
    const screen = customRender(<CookieSettings />, { providerProps });
    expect(screen.asFragment()).toMatchSnapshot('CookiesAcceptedOnLoad');
  });

  it('should match snapshot', () => {
    const providerProps = {
      value: { optIn: false, setOptIn: () => {} },
    };
    const screen = customRender(<CookieSettings />, { providerProps });
    expect(screen.asFragment()).toMatchSnapshot('CookiesRejectedOnLoad');
  });
});
