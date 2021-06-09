import React from 'react';
import { render } from '@testing-library/react';
import Error400 from '../../../pages/page/400';

const setup = () => render(<Error400 />);

describe('400 page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
