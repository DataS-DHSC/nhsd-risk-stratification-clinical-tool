import PropTypes from 'prop-types';
import HeadTags from '../../../components/HeadTags';
import Start from '../../../components/qcovid/Start';
import { ROUTE_QCOVID, ROUTE_PATIENT_DETAILS } from '../../../constants/routes';
import handleServerSideProps from '../../../utils/handleServerSideProps';

const Index = ({ prevData, featureFlags }) => {
  const d = new Date();
  d.setTime(d.getTime() + 12 * 24 * 60 * 60 * 1000);

  return (
    <>
      <HeadTags title="" description="" featureFlags={featureFlags} />
      <Start route={ROUTE_QCOVID + ROUTE_PATIENT_DETAILS} prevData={prevData} />
    </>
  );
};

Index.propTypes = {
  prevData: PropTypes.shape().isRequired,
  featureFlags: PropTypes.shape(),
};

Index.defaultProps = {
  featureFlags: {},
};

export const getServerSideProps = handleServerSideProps({ allowGet: true });

export default Index;
