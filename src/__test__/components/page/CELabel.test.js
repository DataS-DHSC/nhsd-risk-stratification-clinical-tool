import React from 'react';
import { render } from '@testing-library/react';
import CELabel from '../../../components/page/CELabel';

const setup = () => render(<CELabel />);

describe('CELabel', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
