/**
 * @jest-environment node
 *
 * when using @jest-environment node, the window global object will be undefined
 * this test is simulating the code running server side
 */
import { renderHook } from '@testing-library/react-hooks';
import { createContext, useContext } from 'react';
import RiskStratContextProvider from '../../context/RiskStratContextProvider';

const TestContext = createContext();
const useTestContext = () => useContext(TestContext);

describe('RiskStratContextProvider serverside', () => {
  it('returns the null context data on server side invocation', () => {
    const wrapper = ({ children }) => (
      <RiskStratContextProvider
        RiskStratContext={TestContext}
        initialState={{ testField: 'testValue' }}
      >
        {children}
      </RiskStratContextProvider>
    );
    const { result } = renderHook(() => useTestContext(), { wrapper });
    const [contextData] = result.current;
    expect(contextData).toEqual(null);
  });
});
