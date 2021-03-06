import { Button, WarningCallout } from 'nhsuk-react-components';
import PropTypes from 'prop-types';
import PageReviewDates from '../PageReviewDates';
import { ROUTE_CLINICAL_GUIDANCE } from '../../constants/routes';
import ClientSideRoutingForm from '../ClientSideRoutingForm';
import { useQCovidContext } from '../../context/qcovid/qcovid-context';

const Start = ({ prevData, route }) => {
  const [, , resetContextData] = useQCovidContext();
  return (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <h1 id="start-page-main-heading">
          Get a COVID-19 risk assessment for a patient
        </h1>
        <ClientSideRoutingForm action={route} id="start-form" method="POST">
          {Object.entries(prevData).map(([dataKey, data]) => (
            <input
              key={`hidden-input-${dataKey}`}
              type="hidden"
              id={`hidden-input-${dataKey}`}
              name={dataKey}
              value={data}
            />
          ))}

          <p id="service-description-paragraph">
            Use this tool to find out a patient’s combined risk of catching and
            dying from coronavirus (COVID-19), and catching and subsequent
            hospitalisation from COVID-19.
          </p>
          <p id="service-model-paragraph">
            The tool is based on the QCovid&reg; risk prediction model.
          </p>
          <p id="service-use-paragraph">
            You’ll enter information about the patient including their medical
            history. It should take around 3 minutes to complete. The tool has
            been designed for use by clinicians during a consultation with a
            patient or as an aid to support direct care.
          </p>
          <p id="risk-basis-paragraph">
            The result will help you inform clinical discussions with patients
            about the risks if they catch COVID-19 and how they can balance
            those risks with their other needs. You can use the online tool to
            review additions to the SPL made as part of the COVID-19 Population
            Risk Assessment.
          </p>
          <p id="population-risk-assessment-link">
            <a href="https://digital.nhs.uk/coronavirus/risk-assessment/population">
              Read more about the COVID-19 Population Risk Assessment
            </a>
          </p>

          <WarningCallout
            id="service-limitations"
            label="Current limitations of the tool"
          >
            <p>
              It is based on data collected during the first peak of the
              pandemic. This means it cannot give an accurate result for people
              who are:
            </p>
            <ul id="service-limitations-list">
              <li>under 19 or over 100 years old</li>
              <li>intersex or trans</li>
              <li>pregnant</li>
            </ul>

            <p>
              You can use the tool to estimate risk for people who were advised
              to shield during the first wave of the pandemic, or who have a
              condition that qualified a person for shielding during that time,
              as it may inform useful discussions with patients.
            </p>

            <p>
              However, risk may be underestimated in this group because, when
              the research was being carried out, these people may have been
              advised to shield. This means they may have been protected from
              catching coronavirus and therefore severe outcomes such as
              hospitalisation and death.
            </p>

            <p>
              There’s more detail on the{' '}
              <a
                href={`${ROUTE_CLINICAL_GUIDANCE}#current-limitations-of-the-online-tool`}
              >
                limitations of the tool in the clinical guidance
              </a>
              .
            </p>
          </WarningCallout>
          <p>
            The tool uses QCovid&reg;, which is a &apos;living&apos; risk
            prediction model. This means that the model will be updated
            periodically when new research becomes available.
          </p>
          <Button
            type="submit"
            className="nhsuk-u-margin-bottom-6"
            id="start-now-button"
            onClick={() => resetContextData()}
          >
            Start now
          </Button>
          <h2 className="nhsuk-u-margin-top-4">About the tool</h2>
          <p>You can read more about it, such as the:</p>
          <ul>
            <li>
              <a href={ROUTE_CLINICAL_GUIDANCE}>
                clinical guidance for the tool
              </a>
            </li>
            <li>
              <a
                href="https://www.bmj.com/content/371/bmj.m3731"
                rel="noreferrer"
              >
                British Medical Journal’s publication on the QCovid&reg; model
                developed by Oxford University
              </a>
            </li>
          </ul>

          <PageReviewDates page="qcovid" />
        </ClientSideRoutingForm>
      </div>
    </div>
  );
};

Start.propTypes = {
  route: PropTypes.string.isRequired,
  prevData: PropTypes.shape(),
};

Start.defaultProps = {
  prevData: {},
};

export default Start;
