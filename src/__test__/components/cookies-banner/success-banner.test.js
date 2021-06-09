import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import SuccessBanner from '../../../components/cookies-banner/success-banner';
import CookiesContextProvider from '../../../context/cookies-context';

const setup = (props) =>
  render(
    <CookiesContextProvider getCookie={() => undefined}>
      <SuccessBanner {...props} />
    </CookiesContextProvider>
  );

describe('Cookies - SuccessBanner', () => {
  it('should match snapshot', () => {
    const props = {
      hideSuccessBanner: jest.fn(),
    };
    const container = setup(props);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should call hideSuccessBanner once the hide button is pressed', () => {
    const props = {
      hideSuccessBanner: jest.fn(),
    };
    setup(props);
    const element = screen.getByText(/Hide this message/i);
    const clickEvent = createEvent.click(element);
    fireEvent(element, clickEvent);
    expect(clickEvent.defaultPrevented).toBe(true);
    expect(props.hideSuccessBanner).toHaveBeenCalled();
  });
});
