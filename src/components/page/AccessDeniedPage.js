import Head from 'next/head';
import { Row, Col, Label } from 'nhsuk-react-components';
import {
  ROUTE_PATIENT_GUIDANCE,
  ROUTE_LOGIN,
  ROUTE_ACCESS_INFO,
} from '../../constants/routes';
import { SITE_BRANDING_TITLE } from '../../constants/site-branding';

const AccessDeniedPage = () => (
  <>
    <Head>
      <title>{SITE_BRANDING_TITLE} - Access denied</title>
      <meta
        name="description"
        content={`${SITE_BRANDING_TITLE} access denied`}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Row>
      <Col width="two-thirds">
        <Label isPageHeading>
          You&#39;ve not yet been given access to the COVID-19 Clinical Risk{' '}
          Assessment Tool
        </Label>
        <p>
          If you&#39;re a clinician and want to use the COVID-19 Clinical Risk
          Assessment Tool,{' '}
          <a id="login-link" href={ROUTE_LOGIN}>
            {' '}
            generate a link to sign in.
          </a>
        </p>
        <p>
          As a clinician, you can{' '}
          <a
            id="clinician-info-link"
            href={ROUTE_ACCESS_INFO}
            target="_blank"
            rel="noreferrer"
          >
            find out how to get access to the tool (opens in new window).
          </a>
        </p>
        <p>
          If you&#39;re not a clinician and you have a question about the tool,
          you should read the{' '}
          <a
            id="patient-guidance-link"
            href={ROUTE_PATIENT_GUIDANCE}
            target="_blank"
            rel="noreferrer"
          >
            Information for Patients (opens in new window)
          </a>{' '}
          or email risk.strat.spl@nhs.net
        </p>
      </Col>
    </Row>
  </>
);

export default AccessDeniedPage;
