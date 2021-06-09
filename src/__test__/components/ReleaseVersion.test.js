import React from 'react';
import { render } from '@testing-library/react';
import ReleaseVersion from '../../components/ReleaseVersion';

const setup = () => render(<ReleaseVersion />);

describe('ReleaseVersion', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
