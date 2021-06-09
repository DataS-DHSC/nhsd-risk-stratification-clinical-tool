import { Button } from 'nhsuk-react-components';
import PropTypes from 'prop-types';
import AnswerListRow from './AnswerListRow';
import HiddenStateHolder from './HiddenStateHolder';
import { addNamespace } from '../utils/namespacingTools';

const CheckAnswersGenerator = ({ prevData, forms, scoreUrl, formBaseUrl }) => {
  const hasInvalidValues = Object.entries(forms)
    .flatMap(([formId, form]) => [[formId, form.sections[0]]])
    .map(([formId, section]) => [formId, Object.entries(section.fields)])
    .flatMap(([formId, sectionArray]) =>
      sectionArray.map((field) => [formId, field])
    )
    .filter(([, [, field]]) => Boolean(field.fieldValidator))
    .map(([, [fieldId, field]]) =>
      field.fieldValidator(prevData[addNamespace(fieldId)])
    )
    .some((message) => message.length > 0);

  return (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <h1 id="check-answers-heading">Check your answers</h1>
        <p id="check-information-is-correct-paragraph">
          This is the information that will be used to generate the
          patient&apos;s result. Please check that each answer you have given is
          correct.
        </p>

        <form id="check-answers-form" action={scoreUrl} method="POST">
          <HiddenStateHolder stateFields={prevData} />
          {Object.entries(forms).map(([formKey, form]) => (
            <AnswerListRow
              key={`answer-check-${formKey}`}
              pageTemplate={form}
              data={prevData}
              formBaseUrl={formBaseUrl}
            />
          ))}
          <h2 id="generate-risk-score-heading">
            Now generate the patient&apos;s result
          </h2>
          <p id="submit-disclaimer-paragraph">
            By submitting this notification you are confirming that, to the best
            of your knowledge, the details you are providing are correct.
          </p>
          <Button
            type="submit"
            disabled={hasInvalidValues}
            className="nhsuk-u-margin-bottom-8"
            id="continue-button"
          >
            Accept and generate result
          </Button>
        </form>
      </div>
    </div>
  );
};

CheckAnswersGenerator.propTypes = {
  prevData: PropTypes.objectOf(PropTypes.string),
  forms: PropTypes.shape().isRequired,
  scoreUrl: PropTypes.string.isRequired,
  formBaseUrl: PropTypes.string.isRequired,
};

CheckAnswersGenerator.defaultProps = {
  prevData: {},
};

export default CheckAnswersGenerator;
