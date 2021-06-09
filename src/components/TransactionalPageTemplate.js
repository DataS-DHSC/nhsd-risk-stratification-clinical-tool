import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import FormGenerator from './FormGenerator';
import PageReviewDates from './PageReviewDates';
import HeadTags from './HeadTags';
import FormIntroGenerator from './FormIntroGenerator';

const TransactionalPageTemplate = ({
  form,
  prevData,
  context,
  reviewDatesSource,
  featureFlags,
  formBaseUrl,
  pageNames,
}) => {
  const { csrfToken } = prevData;
  const [contextData, setField] = context();
  return (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-two-thirds">
        <HeadTags
          title={form.label}
          description={form.label}
          featureFlags={featureFlags}
        />

        <PageTitle label={form.label} />

        <FormIntroGenerator formId={form.formId} />

        <FormGenerator
          prevData={contextData ? { ...contextData, csrfToken } : prevData}
          form={form}
          setField={setField}
          formBaseUrl={formBaseUrl}
          pageNames={pageNames}
        />

        <PageReviewDates page={reviewDatesSource} />
      </div>
    </div>
  );
};

TransactionalPageTemplate.propTypes = {
  form: PropTypes.shape().isRequired,
  prevData: PropTypes.shape().isRequired,
  context: PropTypes.func.isRequired,
  reviewDatesSource: PropTypes.string.isRequired,
  formBaseUrl: PropTypes.string.isRequired,
  featureFlags: PropTypes.shape(),
  pageNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TransactionalPageTemplate.defaultProps = {
  featureFlags: {},
};

export default TransactionalPageTemplate;
