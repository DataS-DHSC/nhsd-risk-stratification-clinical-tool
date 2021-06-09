import { act, renderHook } from '@testing-library/react-hooks';
import QCovidContextProvider, {
  useQCovidContext,
} from '../../../context/qcovid/qcovid-context';
import { namespaceToNest } from '../../../utils/namespacingTools';
import { QCOVID_DEFAULTS } from '../../../constants/forms-metadata/qcovid/qcovid-forms';

describe('useQCovidContext', () => {
  it('returns the default QCovid data on first invocation', () => {
    const wrapper = ({ children }) => (
      <QCovidContextProvider>{children}</QCovidContextProvider>
    );
    const { result } = renderHook(() => useQCovidContext(), { wrapper });
    const [contextData] = result.current;
    const nestedContextData = namespaceToNest(contextData);

    expect(nestedContextData).toEqual(QCOVID_DEFAULTS);
  });
  it('updates QCovid data', () => {
    const wrapper = ({ children }) => (
      <QCovidContextProvider>{children}</QCovidContextProvider>
    );
    const { result } = renderHook(() => useQCovidContext(), { wrapper });
    const [, setField] = result.current;
    act(() => {
      setField('answers.sex', 'female');
    });
    const [contextData] = result.current;

    expect(namespaceToNest(contextData)).toEqual({
      ...QCOVID_DEFAULTS,
      sex: 'female',
    });
  });

  it('resets QCovidData', () => {
    const wrapper = ({ children }) => (
      <QCovidContextProvider>{children}</QCovidContextProvider>
    );
    const { result } = renderHook(() => useQCovidContext(), { wrapper });
    const [, setField, resetData] = result.current;
    act(() => {
      setField('answers.sex', 'female');
    });
    const [contextData] = result.current;
    expect(namespaceToNest(contextData)).toEqual({
      ...QCOVID_DEFAULTS,
      sex: 'female',
    });

    act(() => {
      resetData();
    });
    const [contextDataReset] = result.current;
    expect(namespaceToNest(contextDataReset)).toEqual({
      ...QCOVID_DEFAULTS,
    });
  });
});
