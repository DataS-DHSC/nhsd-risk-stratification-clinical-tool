import React, { Fragment, useState } from 'react';
import { Button } from 'nhsuk-react-components';
import PropTypes from 'prop-types';
import RadioYesNo from './RadioYesNo';
import RadioMultiValue from './RadioMultiValue';
import SelectField from './SelectField';
import NumericInput from './NumericInput';
import TextInput from './TextInput';
import BMICalc from './BMICalc';
import HiddenStateHolder from './HiddenStateHolder';
import ChangePreviousAnswersForm from './ChangePreviousAnswersForm';
import ClientSideRoutingForm from './ClientSideRoutingForm';
import {
  addNamespace,
  stripNamespace,
  nestToNamespace,
} from '../utils/namespacingTools';
import { extractDefaults } from '../utils/extractDefaults';
import { ROUTE_CHECK_ANSWERS } from '../constants/routes';
import useShallowRouting from './form/useShallowRouting';

const calcNextPage = (formId, pageNames) => {
  const idx = pageNames.indexOf(formId);
  const nextIdx = idx + 1;
  const prevIdx = idx - 1;
  return {
    nextUrl:
      nextIdx < pageNames.length
        ? pageNames[nextIdx]
        : ROUTE_CHECK_ANSWERS.substring(1),
    prevUrl: prevIdx >= 0 ? pageNames[prevIdx] : '',
  };
};

const FormGenerator = ({
  prevData,
  form,
  setField,
  formBaseUrl,
  pageNames,
}) => {
  const { label, formId } = form;
  const { nextUrl, prevUrl } = calcNextPage(formId, pageNames);
  const buttonOnClick = useShallowRouting(formBaseUrl, nextUrl);

  const [linkedValues, setLinkedValues] = useState([]);

  const linkedChangeHandler = (groupName, value) => {
    const newlinkedValues = [...linkedValues];
    const item = newlinkedValues.find((i) => i.groupName === groupName);

    if (item) {
      item.value = value;
    } else {
      newlinkedValues.push({ groupName, value });
    }

    setLinkedValues(newlinkedValues);
  };

  const defaultAnswers = nestToNamespace(extractDefaults({ form }));

  const extractFieldsNotInThisForm = (fields) =>
    Object.entries(fields)
      .filter(([field]) => !(field in defaultAnswers))
      .reduce((newObj, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        newObj[key] = val;
        return newObj;
      }, {});

  return (
    <>
      <ClientSideRoutingForm
        action={`${formBaseUrl}/${nextUrl}`}
        id={`${formId}-form`}
        method="POST"
      >
        <HiddenStateHolder stateFields={extractFieldsNotInThisForm(prevData)} />

        {form.sections.map((section) => (
          <Fragment key={`section-${label}-${section.label}`}>
            {section.label && (
              <h2
                id={`${section.label.toLowerCase().replace(/ /g, '-')}-heading`}
                className="nhsuk-fieldset__legend--m"
              >
                {section.label}
              </h2>
            )}

            {Object.entries(section.fields).map(([fieldName, fieldData]) => {
              let fieldComponent;
              const sectionType = fieldData.type;
              const mandatory = fieldData.required;

              switch (sectionType) {
                case 'multiradio':
                  fieldComponent = (
                    <RadioMultiValue
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={fieldData}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                      setField={setField}
                    />
                  );
                  break;
                case 'select':
                  fieldComponent = (
                    <SelectField
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={fieldData}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                      required={mandatory}
                      setField={setField}
                    />
                  );
                  break;
                case 'numeric-input':
                  fieldComponent = (
                    <NumericInput
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={fieldData}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                      changeCallback={linkedChangeHandler}
                      setField={setField}
                      required={mandatory}
                    />
                  );
                  break;
                case 'text-input':
                  fieldComponent = (
                    <TextInput
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={fieldData}
                      required={mandatory}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                      setField={setField}
                    />
                  );
                  break;
                case 'bmi-calc':
                  const field = fieldData;
                  fieldComponent = (
                    <BMICalc
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={field}
                      linkedValues={field.links.map((link) => {
                        const nlink = addNamespace(link);
                        const item = linkedValues.find(
                          (i) => i.groupName === nlink
                        );
                        const stripItem = item
                          ? {
                              ...item,
                              groupName: stripNamespace(item.groupName),
                            }
                          : undefined;

                        return (
                          stripItem || {
                            groupName: link,
                            value:
                              prevData[nlink.toString()] ||
                              section.fields[link.toString()].defaulted,
                          }
                        );
                      })}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                    />
                  );
                  break;
                default:
                  fieldComponent = (
                    <RadioYesNo
                      key={`section-field-${sectionType}-${label}-${fieldName}`}
                      field={fieldData}
                      groupName={addNamespace(fieldName)}
                      prevData={prevData}
                      setField={setField}
                    />
                  );
              }

              return fieldComponent;
            })}
          </Fragment>
        ))}

        <Button
          type="submit"
          className="nhsuk-u-margin-bottom-8"
          id="continue-button"
          onClick={buttonOnClick}
        >
          Continue
        </Button>
      </ClientSideRoutingForm>
      {prevUrl && (
        <ChangePreviousAnswersForm
          method="POST"
          formBaseUrl={formBaseUrl}
          prevUrl={prevUrl}
          stateFields={prevData}
        />
      )}
    </>
  );
};

FormGenerator.propTypes = {
  prevData: PropTypes.shape(),
  form: PropTypes.shape().isRequired,
  setField: PropTypes.func.isRequired,
  formBaseUrl: PropTypes.string.isRequired,
  pageNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

FormGenerator.defaultProps = {
  prevData: {},
};

export default FormGenerator;
