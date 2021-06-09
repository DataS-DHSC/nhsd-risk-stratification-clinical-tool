import React from 'react';
import PropTypes from 'prop-types';
import { SummaryList, Button } from 'nhsuk-react-components';
import { useRouter } from 'next/router';
import { addNamespace } from '../utils/namespacingTools';

const SectionAnswersSummary = ({ pageSection, data, pageUrl }) => {
  const fields = Object.entries(pageSection.fields).filter(
    ([fieldId]) =>
      (data[addNamespace(fieldId)] !== pageSection.fields[fieldId].default ||
        pageSection.fields[fieldId].default === null) &&
      pageSection.fields[fieldId].type !== 'bmi-calc'
  );

  const router = useRouter();
  return (
    <SummaryList>
      {fields.map(([fieldId, field]) => {
        const {
          label: fieldLabel,
          type,
          options: fieldOptions,
          ariaLabel,
          fieldValidator,
        } = field;
        const fieldValue = data[addNamespace(fieldId)];

        const validationsMessage = fieldValidator
          ? fieldValidator(fieldValue)
          : '';

        let displayedValue = '';
        let selectedOption;

        if (fieldValue) {
          switch (type) {
            case 'multiradio':
              selectedOption = fieldOptions.find(
                (fieldOption) => fieldOption.name.toString() === fieldValue
              );
              displayedValue = selectedOption.label;
              break;
            case 'select':
              const selectFieldFlatOptions = fieldOptions.flatMap(
                (option) => option.options
              );
              selectedOption = selectFieldFlatOptions.find(
                (fieldOption) => fieldOption.name.toString() === fieldValue
              );
              displayedValue = selectedOption.label;

              break;
            case 'radio':
              displayedValue = fieldValue === 'true' ? 'Yes' : 'No';
              break;
            default:
              displayedValue = fieldValue;
          }
        }
        if (validationsMessage) {
          displayedValue = `${displayedValue} (${validationsMessage})`;
        }

        return (
          <SummaryList.Row key={fieldId} id={`summary-row-${fieldId}`}>
            <SummaryList.Key>{fieldLabel}</SummaryList.Key>
            <SummaryList.Value
              className={validationsMessage && 'nhsuk-validation-error'}
            >
              {displayedValue}
            </SummaryList.Value>
            <SummaryList.Actions>
              <Button
                type="submit"
                className="change-button"
                id={`change-button-${fieldId}`}
                formAction={pageUrl}
                aria-label={`Change ${
                  ariaLabel || fieldLabel
                } from ${displayedValue}`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(pageUrl);
                }}
              >
                Change
              </Button>
            </SummaryList.Actions>
          </SummaryList.Row>
        );
      })}
    </SummaryList>
  );
};

SectionAnswersSummary.propTypes = {
  pageSection: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
  pageUrl: PropTypes.string.isRequired,
};

export default SectionAnswersSummary;
