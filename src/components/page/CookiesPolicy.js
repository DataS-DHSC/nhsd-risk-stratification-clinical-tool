import React from 'react';
import PageReviewDates from '../PageReviewDates';
import SiteBrandingTitle from '../SiteBrandingTitle';
import { ROUTE_COOKIES_SETTINGS } from '../../constants/routes';

const CookiesPolicy = () => (
  <>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <h1>
          Cookies for the <SiteBrandingTitle isDefaultName />
        </h1>
      </div>
    </div>
    <article>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <section>
            <div className="block-richtext">
              <p>
                Cookies are small files saved on your phone, tablet or computer
                when you visit a website.
              </p>
              <p>
                They store information about how you use the website. Some of
                them can be turned on and off.
              </p>
              <h2>Essential cookies</h2>
              <p>
                Essential cookies keep your information secure while you use
                this service. We do not need to ask your permission to use them.
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>__Host-csrfToken</td>
                    <td>
                      Helps keep the site secure by preventing cross-site
                      request forgery (CSRF) attacks
                    </td>
                    <td>
                      This cookie is a session cookie and it will expire when
                      the browser window is closed.
                    </td>
                  </tr>
                  <tr>
                    <td>correlationId</td>
                    <td>
                      This is used to determine one user of the service from
                      another. It is also used when we need to investigate any
                      issues you may raise with the service.
                    </td>
                    <td>
                      This cookie is a session cookie and it will expire when
                      the browser window is closed.
                    </td>
                  </tr>
                  <tr>
                    <td>access_token</td>
                    <td>
                      This is used as part of our authorization process.
                      It&apos;s sent with your requests to our servers so we can
                      verify your identity.
                    </td>
                    <td>24 hours</td>
                  </tr>
                  <tr>
                    <td>refresh_token</td>
                    <td>
                      This is used in the process of getting a new access_token
                      when your current access_token expires.
                    </td>
                    <td>6 months</td>
                  </tr>
                </tbody>
              </table>
              <h2>Functional Cookies</h2>
              <p>
                The service will still work without functional cookies, however
                you may not be able to take advantage of certain functionality,
                such as the ability to remember your settings preferences
                between visits.
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>opt-in</td>
                    <td>Saves your cookie consent settings</td>
                    <td>1 year</td>
                  </tr>
                </tbody>
              </table>
              <h2>Analytics Cookies (Optional)</h2>
              <p>
                With your permission, we use Adobe Analytics to gather
                information about how you use this service. This information
                helps us improve our service.
              </p>
              <p>
                Adobe is not allowed to share our analytics data with anyone.
              </p>
              <p>
                Adobe stores anonymised information about:
                <br />
                <ul>
                  <li>How long you spend on the service.</li>
                  <li>Any errors you see while using the service.</li>
                </ul>
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>s_sq</td>
                    <td>
                      This cookie is used by Adobe Analytics. This cookie is set
                      and read by the JavaScript code when the ClickMap
                      functionality or the Activity Map functionality are
                      enabled; it contains information about the previous link
                      that was clicked on by the user
                    </td>
                    <td>
                      This cookie is a session cookie and it will expire when
                      the browser window is closed.
                    </td>
                  </tr>
                  <tr>
                    <td>s_cc</td>
                    <td>
                      This cookie is used by Adobe Analytics. This cookie is set
                      and read by the JavaScript code to determine if cookies
                      are enabled (simply set to “True”)
                    </td>
                    <td>
                      This cookie is a session cookie and it will expire when
                      the browser window is closed.
                    </td>
                  </tr>
                  <tr>
                    <td>s_getNewRepeat</td>
                    <td>
                      This cookie is used by Adobe Analytics. It determines if a
                      visitor is new to site or not.
                    </td>
                    <td>1 month</td>
                  </tr>
                  <tr>
                    <td>s_ppn</td>
                    <td>
                      This cookie is used by Adobe Analytics. It stores data on
                      device recognition.
                    </td>
                    <td>1 day</td>
                  </tr>
                  <tr>
                    <td>s_fid</td>
                    <td>
                      This cookie is used by Adobe Analytics. This cookie is
                      used to identify a unique visitor if the standard s_vi
                      cookie is unavailable due to third-party cookie
                      restrictions. Not used for implementations that use
                      first-party cookies.
                    </td>
                    <td>2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div lassName="block-richtext">
              <h2>Change your cookie settings</h2>
              <p>
                Some cookies, like those used to measure how you use our
                website, are not needed for our website to work.
              </p>
              <p>
                These cookies can help us make our website better, but
                we&apos;ll only use them if you say it&apos;s OK.{' '}
              </p>
              <div className="nhsuk-action-link">
                <a
                  className="nhsuk-action-link__link"
                  href={ROUTE_COOKIES_SETTINGS}
                  id="choose-cookies-link"
                >
                  <svg
                    className="nhsuk-icon nhsuk-icon__arrow-right-circle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" />
                  </svg>
                  <span className="nhsuk-action-link__text">
                    Choose which cookies we use
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
    <PageReviewDates page="static" />
  </>
);

export default CookiesPolicy;
