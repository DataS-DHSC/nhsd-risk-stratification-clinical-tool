import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { ROUTE_QCOVID } from '../../../constants/routes';
import handleServerSideProps from '../../../utils/handleServerSideProps';
import TransactionalPageTemplate from '../../../components/TransactionalPageTemplate';
import { useQCovidContext } from '../../../context/qcovid/qcovid-context';
import {
  QCOVID_FORMS,
  QCOVID_PAGE_NAMES,
} from '../../../constants/forms-metadata/qcovid/qcovid-forms';
import ErrorPage from '../../../components/page/ErrorPage';

const ClinicalQuestionPage = ({ prevData, featureFlags }) => {
  const router = useRouter();
  const { clinicalPage: pageId } = router.query;
  const form = QCOVID_FORMS[pageId];

  if (!form) {
    // we have no form for this url, maybe it was mistyped, surely a 404
    return <ErrorPage statusCode={404} startAgainLink={ROUTE_QCOVID} />;
  }

  return (
    <TransactionalPageTemplate
      form={form}
      context={useQCovidContext}
      prevData={prevData}
      reviewDatesSource="qcovid"
      featureFlags={featureFlags}
      formBaseUrl={ROUTE_QCOVID}
      pageNames={QCOVID_PAGE_NAMES}
    />
  );
};

ClinicalQuestionPage.propTypes = {
  prevData: PropTypes.shape(),
  featureFlags: PropTypes.shape(),
};

ClinicalQuestionPage.defaultProps = {
  prevData: {},
  featureFlags: {},
};

export const getServerSideProps = handleServerSideProps({
  startAgainLink: ROUTE_QCOVID,
});

export default ClinicalQuestionPage;
