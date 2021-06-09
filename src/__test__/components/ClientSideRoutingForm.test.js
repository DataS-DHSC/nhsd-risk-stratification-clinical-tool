import React from 'react';
import { render, fireEvent, createEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import ClientSideRoutingSupportForm from '../../components/ClientSideRoutingForm';

jest.mock('next/router');

const defaultProps = {
  children: <div>test</div>,
  method: 'POST',
  action: 'test/url',
  id: 'test',
};

describe('ClientSideRoutingForm', () => {
  afterEach(jest.clearAllMocks);

  it('should match snapshot', () => {
    const container = render(
      <ClientSideRoutingSupportForm {...defaultProps} />
    );

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should pass the correct url to the router when client side routing is enabled', () => {
    const router = { push: jest.fn() };
    useRouter.mockImplementationOnce(() => router);

    const props = {
      ...defaultProps,
    };

    const { container } = render(<ClientSideRoutingSupportForm {...props} />);
    const form = container.firstChild;
    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
    expect(router.push).toHaveBeenCalledWith(props.action);
  });
});
