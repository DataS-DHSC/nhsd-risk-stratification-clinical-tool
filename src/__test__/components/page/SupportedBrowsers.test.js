import React from 'react';
import { render } from '@testing-library/react';
import SupportedBrowsers from '../../../components/page/SupportedBrowsers';

const setup = () => render(<SupportedBrowsers />);

describe('SupportedBrowsers', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
