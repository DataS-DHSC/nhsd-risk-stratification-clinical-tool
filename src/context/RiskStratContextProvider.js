/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const RiskStratContextProvider = ({
  children,
  RiskStratContext,
  initialState,
}) => {
  let initialContextState = null;
  const isRunningClientSide = typeof window !== 'undefined';
  if (isRunningClientSide) {
    // we only want to use the context state if this code is running client side
    // when javascript is disabled, this code will run server side
    // in that case, we want to return null for the bmaData to force pages to use POST prevData state rather than the context state
    initialContextState = {
      ...initialState,
    };
  }

  const [contextData, setContextData] = useState(initialContextState);

  const setField = (field, value) => {
    setContextData({ ...contextData, [field]: value });
  };

  const resetContext = () => {
    setContextData({ ...initialState });
  };

  return (
    <RiskStratContext.Provider value={[contextData, setField, resetContext]}>
      {children}
    </RiskStratContext.Provider>
  );
};

export default RiskStratContextProvider;
