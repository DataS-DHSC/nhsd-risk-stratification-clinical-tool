import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home';

const setup = () => render(<Home />);

describe('Home', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
