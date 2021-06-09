import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  WarningCallout,
  Details,
  InsetText,
  Table,
} from 'nhsuk-react-components';
import {
  ROUTE_CLINICAL_GUIDANCE,
  ROUTE_PATIENT_GUIDANCE,
  ROUTE_QCOVID,
} from '../../constants/routes';
import RiskPanel from '../RiskPanel';
import ReleaseVersion from '../ReleaseVersion';
import { MHRA_REVISION } from '../../constants/mhraRevision';
import WarningPanel from '../WarningPanel';
import { formatRelativeScore } from '../../utils/formatRelativeScore';

const round = (num) => Math.round((num + Number.EPSILON) * 10000) / 10000;

const ConfirmationPage = ({ assessment }) => (
  <div className="nhsuk-grid-row">
    <div className="nhsuk-grid-column-two-thirds">
      <h1 id="header-patient-assessment">
        COVID-19 clinical risk assessment result
      </h1>
      <WarningPanel warnings={assessment.warnings} />
      <p>
        Their result is based on data over a 97-day period, from the first peak
        of the pandemic. This means that the tool may currently underestimate
        COVID-19 risk to people who were advised to shield during that time,
        because they may have been protected from severe outcomes such as
        hospitalisation and death.
      </p>

      <WarningCallout
        label="Shielded patients list"
        id="shielded-patients-list"
      >
        <p>
          The UK CMOs have set a threshold for risk as assessed by the
          QCovid&reg; model above which people should be considered Clinically
          Extremely Vulnerable (CEV).
        </p>
        <p>These thresholds are:</p>
        <ul>
          <li>
            {' '}
            an absolute risk of catching and dying of COVID-19 of 0.5% and above{' '}
          </li>
          <li>
            {' '}
            a relative risk of catching and dying of COVID-19 of 10 and above{' '}
          </li>
        </ul>
        <p>
          {' '}
          Patients who meet either of these thresholds should be added to the
          SPL unless the patient chooses against it or there is a clinical
          reason not to.{' '}
        </p>
        <p>
          The decision to{' '}
          <a
            id="shielding-advice-link"
            href="https://www.gov.uk/government/publications/guidance-on-shielding-and-protecting-extremely-vulnerable-persons-from-covid-19/guidance-on-shielding-and-protecting-extremely-vulnerable-persons-from-covid-19"
            target="_blank"
            rel="noreferrer"
          >
            add or remove a patient to or from the SPL (opens in new window)
          </a>{' '}
          is ultimately a shared decision with the patient.
        </p>
      </WarningCallout>
      <Panel>
        <h2 id="risk-of-catching-covid">
          Combined risk of catching and dying from COVID-19
        </h2>
        <RiskPanel
          riskType="mortality"
          probability={round(assessment.death.probability)}
          baseline={round(assessment.death.baseline)}
          relativeRisk={formatRelativeScore(assessment.death.relativeRisk)}
        />
        <p>
          The figures above should be used when considering whether a patient
          should be{' '}
          <a
            href={`${ROUTE_CLINICAL_GUIDANCE}#additions-to-the-spl`}
            target="_blank"
            rel="noreferrer"
            id="clinical-guidance-link"
          >
            added to the SPL (opens in new window).
          </a>
        </p>
        <h2
          className="nhsuk-u-margin-top-7"
          id="risk-of-hospitalisation-heading"
        >
          Combined risk of catching and hospitalisation from COVID-19
        </h2>
        <RiskPanel
          riskType="hospitalisation"
          probability={round(assessment.hospitalisation.probability)}
          baseline={round(assessment.hospitalisation.baseline)}
          relativeRisk={formatRelativeScore(
            assessment.hospitalisation.relativeRisk
          )}
        />
        <p id="clinical-tool-version" className="nhsuk-body-s">
          {`Release ${MHRA_REVISION}`} <ReleaseVersion />
        </p>
        <p>
          If recording the result in the patient’s medical record, enter the:
        </p>
        <ul>
          <li>date it was generated </li>
          <li>release and version numbers of the tool (displayed above) </li>
          <li> factors that contributed to the results (displayed below) </li>
        </ul>
        <Details id="risk-explanation">
          <Details.Summary
            id="risk-explanation-summary"
            role="button"
            tabIndex="0"
            aria-expanded="false"
          >
            What does absolute and relative risk mean?
          </Details.Summary>
          <Details.Text id="risk-explanation-text">
            <h3 className="nhsuk-u-margin-bottom-2">Absolute risk</h3>
            <p>
              This is the combined risk of catching and dying from COVID-19, or
              catching and being hospitalised from COVID-19 over a 97-day
              period.
            </p>
            <p>
              For example, an absolute risk score of 1% (or 1 in 100), would
              mean that we would expect 1 person to catch and die from COVID-19
              with the same characteristics and 99 out of 100 to survive.
            </p>
            <h3 className="nhsuk-u-margin-bottom-2">Relative risk</h3>
            <p>
              This is the combined risk of catching and dying from COVID-19, or
              catching and being hospitalised from COVID-19 with this patient’s
              risk factors, compared with a person of the same age and sex
              registered at birth but with no other risk factors.
            </p>
            <p>
              For example, a relative risk of 2 would mean a person with these
              characteristics is twice as likely to catch and die from COVID-19
              than someone who is the same age and sex registered at birth but
              has no risk factors.
            </p>
          </Details.Text>
        </Details>
      </Panel>

      <h3>What factors contributed to your patient&apos;s result</h3>

      {(round(assessment.death.relativeRisk) > 1 ||
        round(assessment.hospitalisation.relativeRisk) > 1) && (
        <>
          <ul id="basis-list">
            {Object.entries(assessment.basis).map(([field, value]) => (
              <li key={field.toString()}>
                {`${field}${value === null ? '' : `: ${value}`}`}
              </li>
            ))}
          </ul>
        </>
      )}

      <h3 id="results-context">How to put this risk result into context</h3>
      <p>
        The table shows example risk scenarios of catching and dying from
        COVID-19 for patients from across the spectrum of absolute and relative
        risk, so you can use them for comparison purposes.
      </p>
      <p>
        For these risk scenarios the following settings were used to generate
        the results: Not homeless or resident of a care home (unless stated),
        blank postcode, and an ethnic origin of &apos;Mixed or Multiple ethnic
        groups: Another mixed background&apos;.
      </p>
      <p>
        Very few people (less than 3% of the population) would get an absolute
        risk result higher than 0.5% for catching and dying from COVID-19.
      </p>
      <Table caption="The table shows the risks of catching and dying from COVID-19 for patients with various risk factors.">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Scenarios</Table.Cell>
            <Table.Cell>Absolute risk</Table.Cell>
            <Table.Cell>Relative risk</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              85-year-old male, Dementia, Type 2 diabetes, CKD 3, BMI 24,
              Resident of a care home
            </Table.Cell>
            <Table.Cell>
              <p>8.8%</p>
              <p>meets CEV threshold</p>
            </Table.Cell>
            <Table.Cell>
              <p>40</p>
              <p>meets CEV threshold</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>55-year-old female, Type 2 diabetes, BMI 28</Table.Cell>
            <Table.Cell>0.038%</Table.Cell>
            <Table.Cell>8.4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              25-year-old female, bone marrow transplant in the last 6 months,
              chemotherapy in the last 12 months (Busulfan), prescribed
              immunosuppressants in the last 6 months, prescribed oral steroids
              in the last 6 months, BMI 22
            </Table.Cell>
            <Table.Cell>0.0074%</Table.Cell>
            <Table.Cell>
              <p>24</p>
              <p>meets CEV threshold</p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>30-year-old male, No comorbidities, BMI 30</Table.Cell>
            <Table.Cell>0.0009%</Table.Cell>
            <Table.Cell>2.3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <h3 className="nhsuk-u-margin-top-7">Information for your patient</h3>
      <p>
        There is{' '}
        <a
          id="patient-guidance-link"
          href={ROUTE_PATIENT_GUIDANCE}
          target="_blank"
          rel="noreferrer"
        >
          information for patients (opens in new window)
        </a>{' '}
        available to help you explain your use of the tool to your patient.
      </p>
      <p>
        You should ensure that the patient is informed of where to find your
        organisation’s privacy notice covering the use of this tool. NHS Digital
        have created a template privacy notice that your organisation can use
        for this purpose.
      </p>
      <h3 className="nhsuk-u-margin-top-7">Advise your patients</h3>
      <p>
        As with all shared decision-making conversations, you should advise your
        patient that they:
      </p>
      <ul>
        <li>
          could potentially reduce their risk by controlling diabetes and losing
          weight through a healthy balanced diet and doing regular physical
          activity
        </li>
        <li>
          can protect themselves and others by adhering{' '}
          <a
            id="coronavirus-link"
            href="https://www.gov.uk/coronavirus"
            target="_blank"
            rel="noreferrer"
          >
            to the latest public health measures (opens in new window)
          </a>
        </li>
      </ul>
      <p>
        We know of other factors which influence risk, such as occupation,
        individual behaviour (such as hand washing, wearing face coverings and
        visiting friends or family), current infection rates and vaccination
        status. These are not currently covered by the tool.
      </p>

      <InsetText visuallyHiddenText="Information: ">
        <p>
          Absolute risks are likely to change over time with changing disease
          prevalence, improved testing data, advances in medical treatments,
          vaccinations and changing immunity, and the model will be updated to
          reflect these. Relative risks are likely to remain more stable over
          time.
        </p>
      </InsetText>

      <a
        href={ROUTE_QCOVID}
        className="nhsuk-u-margin-top-5 nhsuk-u-font-size-19"
        id="new-assessment-link"
      >
        Start a new COVID-19 risk assessment
      </a>
    </div>
  </div>
);

ConfirmationPage.propTypes = {
  assessment: PropTypes.shape().isRequired,
};

export default ConfirmationPage;
