import { render, screen, fireEvent } from '@testing-library/react';
import SelectionBanner from '../../../components/cookies-banner/selection-banner';
import CookiesContextProvider from '../../../context/cookies-context';

const setup = (showSuccessBanner) =>
  render(
    <CookiesContextProvider getCookie={() => undefined}>
      <SelectionBanner showSuccessBanner={showSuccessBanner} />
    </CookiesContextProvider>
  );

describe('Cookies - SelectionBanner', () => {
  it('should match snapshot', () => {
    const container = setup(jest.fn());
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should call showSuccessBanner once cookies are accepted', () => {
    const showSuccessBannerMock = jest.fn();
    setup(showSuccessBannerMock);

    fireEvent.click(screen.getByText(/OK with analytics cookies/i));
    expect(showSuccessBannerMock).toHaveBeenCalled();
  });

  it('should call showSuccessBanner once cookies are rejected', () => {
    const showSuccessBannerMock = jest.fn();
    setup(showSuccessBannerMock);

    fireEvent.click(screen.getByText(/Do not use analytics cookies/i));
    expect(showSuccessBannerMock).toHaveBeenCalled();
  });
});
