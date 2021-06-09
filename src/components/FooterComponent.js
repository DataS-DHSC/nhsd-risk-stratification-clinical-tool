import React from 'react';
import { Footer } from 'nhsuk-react-components';
import {
  ROUTE_SUPPORT_FORM,
  ROUTE_COOKIES_POLICY,
  ROUTE_ACCESSIBILITY,
  ROUTE_TERMS_OF_USE,
  ROUTE_OPEN_SOURCE,
  ROUTE_SUPPORTED_BROWSERS,
  ROUTE_CE_MARK,
  ROUTE_CLINICAL_GUIDANCE,
  ROUTE_PATIENT_GUIDANCE,
} from '../constants/routes';

const FooterComponent = () => (
  <Footer visuallyHiddenText={false}>
    <Footer.List id="footer-list">
      <Footer.ListItem
        href={ROUTE_CLINICAL_GUIDANCE}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-clinical-guidance"
      >
        Clinical Guidance
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_PATIENT_GUIDANCE}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-guidance-for-patients"
      >
        Guidance for patients
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_COOKIES_POLICY}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-cookies-policy"
      >
        Cookies
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_SUPPORT_FORM}
        rel="noopener nofollow noreferrer"
        target="docs"
        id="footer-contact-us"
      >
        Contact us
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_ACCESSIBILITY}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-accessibility-statement"
      >
        Accessibility statement
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_TERMS_OF_USE}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-terms-of-use"
      >
        Terms of use
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_OPEN_SOURCE}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-open-source"
      >
        Open source
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_CE_MARK}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-ce-mark-label"
      >
        Legal information
      </Footer.ListItem>
      <Footer.ListItem
        href={ROUTE_SUPPORTED_BROWSERS}
        target="docs"
        rel="noopener nofollow noreferrer"
        id="footer-supported-browsers"
      >
        Supported browsers
      </Footer.ListItem>
    </Footer.List>
    <Footer.Copyright id="copyright-element">
      &copy; Crown copyright
    </Footer.Copyright>
  </Footer>
);

export default FooterComponent;
