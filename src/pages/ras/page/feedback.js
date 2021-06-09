import { number } from 'prop-types';
import HeadTags from '../../../components/HeadTags';
import handleServerSideRedirect from '../../../utils/handleServerSideRedirect';
import ErrorPage from '../../../components/page/ErrorPage';

const Feedback = ({ statusCode }) => (
  <>
    <HeadTags title="Feedback" description="Feedback" />
    {statusCode ? (
      <ErrorPage statusCode={statusCode} />
    ) : (
      <h1>Loading survey</h1>
    )}
  </>
);

Feedback.propTypes = {
  statusCode: number,
};

Feedback.defaultProps = {
  statusCode: undefined,
};

export const getServerSideProps = handleServerSideRedirect('publicSurvey');

export default Feedback;
