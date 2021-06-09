import React from 'react';
import { render } from '@testing-library/react';
import { Manufacturer } from '../../../components/page/Manufacturer';

const setup = () => render(<Manufacturer />);

describe('Manufacturer', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
