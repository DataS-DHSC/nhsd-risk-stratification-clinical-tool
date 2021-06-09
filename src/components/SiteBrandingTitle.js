import PropTypes from 'prop-types';
import {
  SITE_BRANDING_TITLE,
  MHRA_REGISTERED_NAME,
} from '../constants/site-branding';

const SiteBrandingTitle = ({ isMHRARegisteredName, isDefaultName }) => (
  <>
    {isMHRARegisteredName && !isDefaultName
      ? MHRA_REGISTERED_NAME
      : SITE_BRANDING_TITLE}
  </>
);

SiteBrandingTitle.propTypes = {
  isMHRARegisteredName: PropTypes.bool,
  isDefaultName: PropTypes.bool,
};

SiteBrandingTitle.defaultProps = {
  isMHRARegisteredName: false,
  isDefaultName: false,
};

export default SiteBrandingTitle;
