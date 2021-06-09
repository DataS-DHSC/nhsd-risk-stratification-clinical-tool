import React from 'react';
import PageReviewDates from '../PageReviewDates';

export function CookieConfirmationPage() {
  return (
    <>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Your cookie settings have been saved.</h1>
        </div>
      </div>
      <article>
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
            <section>
              <div className="block-richtext">
                <p>We&apos;ll save your settings for a year.</p>
                <p>
                  We&apos;ll ask you if you&apos;re still OK with us using
                  cookies when either:
                </p>
                <ul>
                  <li>
                    it&apos;s been a year since you last saved your settings we
                  </li>
                  <li>add any new cookies or change the cookies we use</li>
                </ul>
                <p>
                  You can also change your settings at any time using{' '}
                  <a href="/page/cookies/policy">our cookies page.</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
      <PageReviewDates page="static" />
    </>
  );
}
