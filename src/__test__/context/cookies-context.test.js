import { renderHook, act } from '@testing-library/react-hooks';
import CookiesContextProvider, {
  useCookiesContext,
} from '../../context/cookies-context';

describe('Cookies Context', () => {
  it('optIn is false (boolean) when cookie is set with value of "false"', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => 'false'}>
        {children}
      </CookiesContextProvider>
    );
    const {
      result: { current },
    } = renderHook(() => useCookiesContext(), { wrapper });
    expect(current.optIn).toStrictEqual(false);
  });

  it('optIn is undefined when cookie is undefined (not set)', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => undefined}>
        {children}
      </CookiesContextProvider>
    );
    const {
      result: { current },
    } = renderHook(() => useCookiesContext(), { wrapper });
    expect(current.optIn).toStrictEqual(undefined);
  });

  it('optIn is true when cookie is set with value of "false"', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => 'true'}>
        {children}
      </CookiesContextProvider>
    );
    const {
      result: { current },
    } = renderHook(() => useCookiesContext(), { wrapper });
    expect(current.optIn).toStrictEqual(true);
  });

  it('defaults to undefined when an invalid cookie value is set', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => 'cookiemonster'}>
        {children}
      </CookiesContextProvider>
    );
    const {
      result: { current },
    } = renderHook(() => useCookiesContext(), { wrapper });
    expect(current.optIn).toStrictEqual(undefined);
  });

  it('should update optIn variable when setOptIn function is called', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => undefined}>
        {children}
      </CookiesContextProvider>
    );

    const { result } = renderHook(() => useCookiesContext(), { wrapper });

    expect(result.current.setOptIn).toBeDefined();

    const optInValue = 'true';

    act(() => result.current.setOptIn(optInValue));
    expect(result.current.optIn).toBe(optInValue);
  });

  it('should have false as initial value for isSuccessBannerVisible', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => undefined}>
        {children}
      </CookiesContextProvider>
    );
    const { result } = renderHook(() => useCookiesContext(), { wrapper });
    expect(result.current.isSuccessBannerVisible).toBe(false);
  });

  it('should update isSuccessBannerVisible depending on show or hide functions are called', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => undefined}>
        {children}
      </CookiesContextProvider>
    );
    const { result } = renderHook(() => useCookiesContext(), { wrapper });
    expect(result.current.showSuccessBanner).toBeDefined();
    act(() => result.current.showSuccessBanner());
    expect(result.current.isSuccessBannerVisible).toBe(true);
    expect(result.current.hideSuccessBanner).toBeDefined();
    act(() => result.current.hideSuccessBanner());
    expect(result.current.isSuccessBannerVisible).toBe(false);
  });

  it('should return false for isSelectionBannerVisible when optIn is undefined', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => undefined}>
        {children}
      </CookiesContextProvider>
    );
    const { result } = renderHook(() => useCookiesContext(), { wrapper });
    expect(result.current.isSelectionBannerVisible()).toBe(true);
  });

  it('should return true for isSelectionBannerVisible when optIn has value', () => {
    const wrapper = ({ children }) => (
      <CookiesContextProvider getCookie={() => 'true'}>
        {children}
      </CookiesContextProvider>
    );
    const { result } = renderHook(() => useCookiesContext(), { wrapper });
    expect(result.current.isSelectionBannerVisible()).toBe(false);
  });
});
