import PropTypes from 'prop-types';
import { ROUTE_CLINICAL_GUIDANCE } from '../constants/routes';

function ContextHelp(props) {
  const { helpPageReference, labelText } = props;
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href={`${ROUTE_CLINICAL_GUIDANCE}#${helpPageReference}`}
        rel="opener"
        target="_blank"
      >
        {labelText}
      </a>
    </>
  );
}

ContextHelp.propTypes = {
  helpPageReference: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

ContextHelp.defaultProps = {
  helpPageReference: 'top',
};

export default ContextHelp;
