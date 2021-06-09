import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationPage from '../../../../pages/page/cookies/confirmation';

const setup = () => render(<ConfirmationPage />);

describe('Cookies confirmation page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
