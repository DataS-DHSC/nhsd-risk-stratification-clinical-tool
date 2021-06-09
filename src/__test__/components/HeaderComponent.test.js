import React from 'react';
import { render } from '@testing-library/react';
import HeaderComponent from '../../components/HeaderComponent';

const setup = () => render(<HeaderComponent />);

describe('HeaderComponent', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
