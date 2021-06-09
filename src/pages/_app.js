/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import cookie from 'react-cookies';
import { useEffect } from 'react';
import CookiesBanner from '../components/cookies-banner/cookies-banner';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import Error from '../components/page/ErrorPage';
import CookiesContextProvider from '../context/cookies-context';
import QCovidContextProvider from '../context/qcovid/qcovid-context';
import '../styles/styles.scss';

function resetDocumentFocus() {
  // despite scrolling to the top of the window,
  // the focus of the document is sometimes unaltered
  // resulting in one of the bottom elements to get focus
  // on a TAB event if you've already tabbed through the previous page
  // note: blurring the current activeElement or focusing the <body>
  // does not seem to affect the next element to tab
  // so we use a dummy element at the top of the DOM to reset it
  const focusReset = document.getElementById('focus-reset');
  focusReset.style.display = 'block';
  focusReset.focus();
  focusReset.style.display = 'none';
}

function getCookie(name) {
  return cookie.load(name);
}

function MyApp({ Component, pageProps }) {
  // Find out what section of the application we are in
  // And embed that the component into the right context

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', resetDocumentFocus);
    return () => router.events.off('routeChangeComplete', resetDocumentFocus);
  }, []);

  // All sections will be embeded to CookiesContextProvider
  return (
    <CookiesContextProvider getCookie={getCookie}>
      <QCovidContextProvider>
        <a href="#" id="focus-reset" style={{ display: 'none' }} />
        <CookiesBanner />
        <HeaderComponent />
        <div className="nhsuk-width-container ">
          <main className="nhsuk-main-wrapper " id="maincontent">
            {pageProps.error ? (
              <Error {...pageProps.error} />
            ) : (
              <Component {...pageProps} />
            )}
          </main>
        </div>
        <FooterComponent />
      </QCovidContextProvider>
    </CookiesContextProvider>
  );
}

export default MyApp;
