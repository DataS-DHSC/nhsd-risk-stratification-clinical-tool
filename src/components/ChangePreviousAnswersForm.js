import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon } from 'nhsuk-react-components';
import HiddenStateHolder from './HiddenStateHolder';
import ClientSideRoutingForm from './ClientSideRoutingForm';
import useShallowRouting from './form/useShallowRouting';

const ChangePreviousAnswersForm = ({
  formBaseUrl,
  prevUrl,
  method,
  stateFields,
}) => {
  const buttonOnClick = useShallowRouting(formBaseUrl, prevUrl);

  return (
    <ClientSideRoutingForm
      action={`${formBaseUrl}/${prevUrl}`}
      method={method}
      id="change-previous-answers-form"
    >
      <HiddenStateHolder stateFields={stateFields} />

      <div className="nhsuk-back-link">
        <button
          type="submit"
          className="nhsuk-back-link__link"
          id="back-link"
          onClick={buttonOnClick}
        >
          <ChevronLeftIcon /> Change my previous answers
        </button>
      </div>
    </ClientSideRoutingForm>
  );
};

ChangePreviousAnswersForm.propTypes = {
  stateFields: PropTypes.shape().isRequired,
  method: PropTypes.string.isRequired,
  prevUrl: PropTypes.string.isRequired,
  formBaseUrl: PropTypes.string.isRequired,
};

export default ChangePreviousAnswersForm;
