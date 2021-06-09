import React from 'react';
import { render } from '@testing-library/react';
import CookiesPolicy from '../../../components/page/CookiesPolicy';

const setup = () => render(<CookiesPolicy />);

describe('CookiesPolicy', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
