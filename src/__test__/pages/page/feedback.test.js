import React from 'react';
import { render } from '@testing-library/react';
import Feedback from '../../../pages/ras/page/feedback';

const setup = () => render(<Feedback />);

describe('feedback should match snapshot', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
