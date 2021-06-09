import React from 'react';
import { render } from '@testing-library/react';
import Error503 from '../../../pages/page/503';

const setup = () => render(<Error503 />);

describe('503 page', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
