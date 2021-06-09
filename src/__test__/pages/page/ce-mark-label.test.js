import React from 'react';
import { render } from '@testing-library/react';
import CEMarkLabel from '../../../pages/page/ce-mark-label';

const setup = () => render(<CEMarkLabel />);

describe('ce-mark-label', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
