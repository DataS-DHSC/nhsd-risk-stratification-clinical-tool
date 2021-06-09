/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { QCOVID_DEFAULTS } from '../../constants/forms-metadata/qcovid/qcovid-forms';
import RiskStratContextProvider from '../RiskStratContextProvider';
import { nestToNamespace } from '../../utils/namespacingTools';

const QCovidContext = createContext();

export const useQCovidContext = () => useContext(QCovidContext);

const QCovidContextProvider = ({ children }) => (
  <RiskStratContextProvider
    RiskStratContext={QCovidContext}
    initialState={{ ...nestToNamespace(QCOVID_DEFAULTS) }}
  >
    {children}
  </RiskStratContextProvider>
);

export default QCovidContextProvider;
