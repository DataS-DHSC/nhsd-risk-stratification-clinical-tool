import React from 'react';
import { render } from '@testing-library/react';
import Accessibility from '../../../components/page/Accessibility';

const setup = () => render(<Accessibility />);

describe('Accessibility', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
