import React from 'react';
import { render } from '@testing-library/react';
import { ProductDetails } from '../../../components/page/ProductDetails';

const setup = () => render(<ProductDetails />);

describe('ProductDetails', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
