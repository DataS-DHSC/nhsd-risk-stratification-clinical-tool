import React from 'react';
import { render } from '@testing-library/react';
import SiteBrandingTitle from '../../components/SiteBrandingTitle';

const setup = (isMHRARegisteredName) => {
  const props = {
    isMHRARegisteredName,
  };

  return render(<SiteBrandingTitle {...props} />);
};

describe('SiteBrandingTitle', () => {
  it('renders correctly for site branding title', () => {
    const container = setup(false);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('renders correctly for MHRA name', () => {
    const container = setup(true);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
