import React from 'react';
import { render } from '@testing-library/react';
import AccessibilityPage from '../../../pages/page/accessibility';

const setup = () => render(<AccessibilityPage />);

describe('accessibility', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
