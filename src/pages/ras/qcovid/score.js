import PropTypes from 'prop-types';
import HeadTags from '../../../components/HeadTags';
import ConfirmationPage from '../../../components/qcovid/ConfirmationPage';
import FailureSummary from '../../../components/FailurePage';
import PageReviewDates from '../../../components/PageReviewDates';
import riskAssessment from '../../../utils/riskAssessment';
import readFeatureFlags from '../../../utils/readFeatureFlags';
import {
  readServerSideRequest,
  processServerSideProps,
} from '../../../utils/handleServerSideProps';
import { ROUTE_QCOVID } from '../../../constants/routes';
import { retrieveQueryStringParameters } from '../../../utils/retrieveVariablesFromURL';

const Score = ({ success, assessment, correlationId, featureFlags }) => (
  <>
    <HeadTags title="Score" description="score" featureFlags={featureFlags} />

    {success ? (
      <ConfirmationPage assessment={assessment} />
    ) : (
      <FailureSummary correlationId={correlationId} />
    )}

    <PageReviewDates page="qcovid" />
  </>
);

Score.propTypes = {
  assessment: PropTypes.shape({
    warnings: PropTypes.arrayOf(PropTypes.shape()),
    death: PropTypes.shape({
      probability: PropTypes.number.isRequired,
      baseline: PropTypes.number.isRequired,
      relativeRisk: PropTypes.number.isRequired,
    }).isRequired,
    hospitalisation: PropTypes.shape({
      probability: PropTypes.number.isRequired,
      baseline: PropTypes.number.isRequired,
      relativeRisk: PropTypes.number.isRequired,
    }).isRequired,
    baseline: PropTypes.shape(),
  }),
  success: PropTypes.bool.isRequired,
  correlationId: PropTypes.string.isRequired,
  featureFlags: PropTypes.shape(),
};

Score.defaultProps = {
  featureFlags: {},
  assessment: null,
};

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const reqData = await readServerSideRequest(req);
  const requestState = processServerSideProps(res, reqData, {
    startAgainLink: ROUTE_QCOVID,
    allowGet: reqData.allowGet,
  });

  if (requestState.props.error) {
    return {
      props: {
        ...requestState.props,
        featureFlags: await readFeatureFlags(),
      },
    };
  }

  // get score from API request using data
  let assessment = null;
  const { formData, csrfToken, correlationId } = reqData;

  if (requestState.props.allowGet) {
    // Testing scenario triggered by pa11y tests
    // Stock response provided so the results page appears
    assessment = retrieveQueryStringParameters(reqData.url).assessment
      ? JSON.parse(retrieveQueryStringParameters(reqData.url).assessment)
      : null;
  } else {
    // get score from API request using data
    assessment = await riskAssessment(formData, csrfToken, correlationId);
  }

  return {
    props: {
      ...requestState.props,
      assessment,
      success: assessment !== null,
      correlationId,
      featureFlags: await readFeatureFlags(),
    },
  };
};

export default Score;
