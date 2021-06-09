import React from 'react';
import { render } from '@testing-library/react';
import AccessDeniedPage from '../../../components/page/AccessDeniedPage';

const setup = () => render(<AccessDeniedPage />);

describe('AccessDeniedPage', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
