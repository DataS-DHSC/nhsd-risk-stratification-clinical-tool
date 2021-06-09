import { render } from '@testing-library/react';
import React from 'react';
import CookiesPolicyPage from '../../../../pages/page/cookies/policy';

const setup = () => render(<CookiesPolicyPage />);

describe('Cookies settings page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
