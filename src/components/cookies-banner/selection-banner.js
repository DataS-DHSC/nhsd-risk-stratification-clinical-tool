import React from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import addMonths from 'date-fns/addMonths';

import { useCookiesContext } from '../../context/cookies-context';

const SelectionBanner = ({ showSuccessBanner }) => {
  const { setOptIn } = useCookiesContext();

  const setOptInCookie = ({ isOptIn }) => {
    cookie.save('opt-in', isOptIn, {
      path: '/',
      expires: addMonths(new Date(), 12),
      sameSite: 'Strict',
    });
    setOptIn(isOptIn);

    // Now that the cookie preferences are selected
    // We can show the success banner
    showSuccessBanner();
  };

  return (
    <nav id="nhsuk-cookie-banner" className="nhsuk-cookie-banner">
      <div className="nhsuk-width-container">
        <h3>Cookies on the NHS website</h3>
        <p>
          We&#39;ve put some small files called cookies on your device to make
          our site work.
        </p>
        <p>
          We&#39;d also like to use analytics cookies. These send information
          about how our site is used to services called Adobe Analytics, Hotjar
          and Google Analytics. We use this information to improve our site.
        </p>
        <p>
          Let us know if this is OK. We&#39;ll use a cookie to save your choice.
          You can{' '}
          <a id="nhsuk-cookie-banner__link" href="/page/cookies/policy">
            read more about our cookies
          </a>{' '}
          before you choose.
        </p>
        <ul>
          <li>
            <button
              type="submit"
              className="nhsuk-button"
              id="nhsuk-cookie-banner-opt-in"
              onClick={() => setOptInCookie({ isOptIn: 'true' })}
            >
              I&#39;m OK with analytics cookies
            </button>
          </li>
          <li>
            <button
              type="submit"
              className="nhsuk-button"
              id="nhsuk-cookie-banner-opt-out"
              onClick={() => setOptInCookie({ isOptIn: 'false' })}
            >
              Do not use analytics cookies
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

SelectionBanner.propTypes = {
  showSuccessBanner: PropTypes.func.isRequired,
};

export default SelectionBanner;
