import React from 'react';
import { render } from '@testing-library/react';
import Error404 from '../../../pages/page/404';

const setup = () => render(<Error404 />);

describe('404 page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
