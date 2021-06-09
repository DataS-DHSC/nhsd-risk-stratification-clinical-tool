/* eslint-disable jsx-a11y/label-has-associated-control */
import { addMonths } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import cookie from 'react-cookies';
import { useCookiesContext } from '../../context/cookies-context';
import {
  boolToAnalyticsInputvalue,
  analyticsInputValueToBool,
} from '../../utils/cookieSettingsUtils';
import { ROUTE_COOKIES_CONFIRMATION } from '../../constants/routes';

function CookieSettings() {
  const router = useRouter();

  const { optIn, setOptIn } = useCookiesContext();

  const [analyticsCookiesInput, setAnalyticsCookiesInput] = useState(
    boolToAnalyticsInputvalue(optIn)
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    const defaultCookieSettings = {
      path: '/',
      sameSite: 'Strict',
    };
    cookie.save(
      'opt-in',
      `${analyticsInputValueToBool(analyticsCookiesInput)}`,
      {
        ...defaultCookieSettings,
        expires: addMonths(new Date(), 12),
      }
    );
    setOptIn(analyticsInputValueToBool(analyticsCookiesInput));
    router.push(ROUTE_COOKIES_CONFIRMATION);
  }

  return (
    <body>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1 className="nhsuk-heading-l">Change your cookie settings</h1>
          <noscript>
            <p className="nhsuk-body">
              We cannot change your cookie settings at the moment because
              JavaScript is not running in your browser. To fix this, try:
            </p>
            <ul className="nhsuk-list nhsuk-list--bullet">
              <li>turning on JavaScript in your browser settings</li>
              <li>reloading this page</li>
            </ul>
          </noscript>

          <form onSubmit={handleSubmit} method="post" noValidate>
            <div className="nhsuk-form-group">
              <p className="nhsuk-body">
                Let us know which cookies we can use. We&apos;ll use a cookie to
                save your settings.
              </p>
              <fieldset className="nhsuk-fieldset">
                <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--s">
                  Cookies that measure website use (analytics cookies)
                </legend>
                <p>
                  These cookies store information about how you use our website,
                  such as the links you click on. We use them to help make our
                  website better.
                </p>
                <div className="nhsuk-radios">
                  <div className="nhsuk-radios__item">
                    <input
                      className="nhsuk-radios__input"
                      id="analytics-cookies-yes"
                      name="analytics-cookies"
                      type="radio"
                      value="yes"
                      onChange={(evt) => {
                        setAnalyticsCookiesInput(evt.target.value);
                      }}
                      checked={analyticsCookiesInput === 'yes'}
                    />
                    <label
                      className="nhsuk-label nhsuk-radios__label"
                      htmlFor="analytics-cookies-yes"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="nhsuk-radios__item">
                    <input
                      className="nhsuk-radios__input"
                      id="analytics-cookies-no"
                      name="analytics-cookies"
                      type="radio"
                      value="no"
                      onChange={(evt) => {
                        setAnalyticsCookiesInput(evt.target.value);
                      }}
                      checked={analyticsCookiesInput === 'no'}
                    />
                    <label
                      htmlFor="analytics-cookies-no"
                      className="nhsuk-label nhsuk-radios__label"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <button
              type="submit"
              className="nhsuk-button"
              data-module="nhsuk-button"
              id="save-cookie-settings"
            >
              Save cookie settings
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default CookieSettings;
