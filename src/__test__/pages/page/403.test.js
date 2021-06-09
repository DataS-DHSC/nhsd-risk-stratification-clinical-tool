import React from 'react';
import { render } from '@testing-library/react';
import Error403 from '../../../pages/page/403';

const setup = () => render(<Error403 />);

describe('403 page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
