import PropTypes from 'prop-types';
import { Hint, InsetText } from 'nhsuk-react-components';
import { ROUTE_CLINICAL_GUIDANCE } from '../constants/routes';

import { formId as qcovidBodyMassIndexFormId } from '../constants/forms-metadata/qcovid/body-mass-index';
import { formId as qcovidImunoCancerConditionsFormId } from '../constants/forms-metadata/qcovid/immunosuppressants-cancer-conditions';

// Adding new form intros?
// Think about extracting them into different files if this file is getting too long

export const BodyMassIndexFormIntro = () => (
  <>
    <InsetText>
      <p>
        BMI is an important and modifiable risk factor. You do not need to enter
        this information, but it&apos;ll help get a more accurate result if you
        do.
      </p>
    </InsetText>

    <Hint>If the patient&apos;s BMI is:</Hint>
    <Hint>
      <ul>
        <li>not entered, we&apos;ll use a BMI of 25</li>
        <li>below 15, we&apos;ll use a calculation of 15</li>
        <li>over 47, we&apos;ll use a calculation of 47</li>
      </ul>
    </Hint>
  </>
);

export const ImmunoCancerConditionsFormIntro = () => (
  <>
    <InsetText>
      <p>
        You can{' '}
        <a
          href={`${ROUTE_CLINICAL_GUIDANCE}#chemotherapy-and-immunosuppressants`}
          target="_blank"
          rel="noreferrer"
        >
          see a full list of immunosuppressants (opens in new window)
        </a>{' '}
        if you need guidance to answer the last question on this page.
      </p>
    </InsetText>
  </>
);

const FormIntroGenerator = ({ formId }) => {
  switch (formId) {
    case qcovidBodyMassIndexFormId:
      return <BodyMassIndexFormIntro />;
    case qcovidImunoCancerConditionsFormId:
      return <ImmunoCancerConditionsFormIntro />;
    default:
      return null;
  }
};

FormIntroGenerator.propTypes = {
  formId: PropTypes.string,
};

FormIntroGenerator.defaultProps = {
  formId: null,
};

export default FormIntroGenerator;
