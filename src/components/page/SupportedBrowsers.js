import React from 'react';
import PageReviewDates from '../PageReviewDates';
import SiteBrandingTitle from '../SiteBrandingTitle';

const SupportedBrowsers = () => (
  <>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <h1 id="supported-browsers-heading">
          Browsers Supported by the <SiteBrandingTitle isDefaultName />
        </h1>
      </div>
    </div>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <table id="supported-browsers-table">
          <tr>
            <th>Operating System</th>
            <th>Browser</th>
          </tr>
          <tr>
            <td>Windows</td>
            <td>Internet Explorer 11</td>
          </tr>
          <tr>
            <td />
            <td>Edge 84 (latest)</td>
          </tr>
          <tr>
            <td />
            <td>Chrome 86 (latest)</td>
          </tr>
          <tr>
            <td />
            <td>Firefox 82 (latest)</td>
          </tr>
          <tr>
            <td>Mac OS</td>
            <td>Safari 14.0 (latest)</td>
          </tr>
          <tr>
            <td />
            <td>Chrome 86 (latest)</td>
          </tr>
          <tr>
            <td>iOS</td>
            <td>Safari 14.0 (latest)</td>
          </tr>
        </table>
      </div>
    </div>
    <PageReviewDates page="static" />
  </>
);

export default SupportedBrowsers;
