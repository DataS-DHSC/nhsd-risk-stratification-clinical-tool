import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const ClientSideRoutingForm = ({ children, method, action, id }) => {
  const router = useRouter();
  return (
    <form
      action={action}
      method={method}
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(action);
      }}
    >
      {children}
    </form>
  );
};

ClientSideRoutingForm.propTypes = {
  children: PropTypes.node.isRequired,
  method: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ClientSideRoutingForm;
