import { render } from '@testing-library/react';
import React from 'react';
import CookieSettings from '../../../../components/page/CookieSettings';

describe('Cookies settings page', () => {
  it('should match snapshot', () => {
    const container = render(<CookieSettings />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
