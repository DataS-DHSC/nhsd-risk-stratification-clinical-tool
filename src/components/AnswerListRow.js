import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionAnswersSummary from './SectionAnswersSummary';

const filterSectionsWithAllDefaults = (sections, data) =>
  sections.filter((section) =>
    Object.keys(section.fields).some(
      (field) =>
        data[`answers.${field}`] !== section.fields[field].default ||
        section.fields[field].default === null
    )
  );

const AnswerListRow = ({ pageTemplate, data, formBaseUrl }) => {
  const { label, sections, formId } = pageTemplate;
  const url = `${formBaseUrl}/${formId}`;

  // Filter sections that have default values for ALL their fields
  const filteredSections = filterSectionsWithAllDefaults(sections, data);

  return (
    <>
      {filteredSections.length > 0 && (
        <h2
          id={`answer-list-${label.toLowerCase().replace(/ /g, '-')}-heading`}
        >
          {label}
        </h2>
      )}
      {filteredSections.map((pageSection) => (
        <Fragment key={`${label}-${pageSection.label}`}>
          {pageSection.label !== '' && (
            <h3
              id={`answer-list-${pageSection.label
                .toLowerCase()
                .replace(/ /g, '-')}-heading`}
            >
              {pageSection.label}
            </h3>
          )}
          <SectionAnswersSummary
            pageSection={pageSection}
            data={data}
            pageUrl={url}
          />
        </Fragment>
      ))}
    </>
  );
};

AnswerListRow.propTypes = {
  pageTemplate: PropTypes.shape().isRequired, // TODO: rename to 'form' to be consistent with FormGenerator
  data: PropTypes.shape().isRequired,
  formBaseUrl: PropTypes.string.isRequired,
};

export default AnswerListRow;
