import React from 'react';
import { render } from '@testing-library/react';
import UserIPAddress from '../../components/UserIPAddress';

const setup = () => render(<UserIPAddress />);

describe('UserIPAddress', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
