import React from 'react';
import { render } from '@testing-library/react';
import FooterComponent from '../../components/FooterComponent';

const setup = () => render(<FooterComponent />);

describe('FooterComponent', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
