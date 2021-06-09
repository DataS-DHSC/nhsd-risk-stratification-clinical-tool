import React from 'react';
import { render } from '@testing-library/react';
import WarningBanner from '../../components/WarningBanner';

const setup = () => render(<WarningBanner />);

describe('WarningBanner', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
