import PropTypes from 'prop-types';
import HeadTags from '../../../components/HeadTags';
import CheckAnswersGenerator from '../../../components/CheckAnswersGenerator';
import PageReviewDates from '../../../components/PageReviewDates';
import handleServerSideProps from '../../../utils/handleServerSideProps';
import { ROUTE_QCOVID, ROUTE_SCORE } from '../../../constants/routes';
import { QCOVID_FORMS } from '../../../constants/forms-metadata/qcovid/qcovid-forms';
import { useQCovidContext } from '../../../context/qcovid/qcovid-context';

const CheckYourAnswers = ({ prevData, featureFlags }) => {
  const [qCovidData] = useQCovidContext();
  const { headers, csrfToken } = prevData;
  return (
    <>
      <HeadTags
        title="Check your answers"
        description="check your answers"
        featureFlags={featureFlags}
      />
      <CheckAnswersGenerator
        forms={{ ...QCOVID_FORMS }}
        prevData={qCovidData ? { ...qCovidData, headers, csrfToken } : prevData}
        scoreUrl={ROUTE_QCOVID + ROUTE_SCORE}
        formBaseUrl={ROUTE_QCOVID}
      />
      <PageReviewDates page="qcovid" />
    </>
  );
};

CheckYourAnswers.propTypes = {
  prevData: PropTypes.objectOf(PropTypes.string),
  featureFlags: PropTypes.shape(),
};

CheckYourAnswers.defaultProps = {
  prevData: {},
  featureFlags: {},
};

export const getServerSideProps = handleServerSideProps({
  startAgainLink: ROUTE_QCOVID,
});

export default CheckYourAnswers;
