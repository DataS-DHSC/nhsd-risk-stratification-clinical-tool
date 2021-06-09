import React from 'react';
import { ROUTE_IP_ENDPOINT } from '../constants/routes';
import { useFetch } from '../utils/hooks';

const UserIPAddress = () => {
  const [siteData, loading] = useFetch({
    url: ROUTE_IP_ENDPOINT,
    bodyType: 'text',
  });
  return <>{loading ? '' : siteData}</>;
};

export default UserIPAddress;
