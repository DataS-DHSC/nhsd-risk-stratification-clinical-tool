import React from 'react';
import { render } from '@testing-library/react';
import BetaWarningBanner from '../../components/BetaWarningBanner';

describe('BetaWarningBanner', () => {
  it('should match snapshot ', () => {
    expect(render(<BetaWarningBanner />).asFragment()).toMatchSnapshot();
  });
});
