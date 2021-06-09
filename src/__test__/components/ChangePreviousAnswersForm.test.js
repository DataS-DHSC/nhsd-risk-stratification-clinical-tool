import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import ChangePreviousAnswersForm from '../../components/ChangePreviousAnswersForm';

jest.mock('next/router');

describe('ChangePreviousAnswersForm', () => {
  it('should match snapshot', () => {
    const router = { push: jest.fn() };
    useRouter.mockImplementationOnce(() => router);

    const props = {
      stateFields: { field1: 'value1', field2: 'value2' },
      formBaseUrl: 'baseUrl',
      prevUrl: 'prevUrl',
      method: 'POST',
    };

    const container = render(<ChangePreviousAnswersForm {...props} />);
    expect(container.asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(/Change my previous answers/i));

    expect(router.push).toHaveBeenCalledWith(
      { pathname: 'baseUrl/prevUrl' },
      undefined,
      { shallow: true }
    );
  });
});
