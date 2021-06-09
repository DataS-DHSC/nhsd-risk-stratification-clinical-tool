import React from 'react';
import { render } from '@testing-library/react';
import SideNav from '../../components/SideNav';

const setup = (children) => {
  const props = {
    children,
  };

  return render(<SideNav {...props} />);
};

describe('SideNav', () => {
  it('should match snapshot with no child elements', () => {
    const container = setup('');
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with child elements', () => {
    const container = setup(<SideNav.Item href="#">Link</SideNav.Item>);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
