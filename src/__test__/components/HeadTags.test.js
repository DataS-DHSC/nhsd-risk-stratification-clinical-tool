import React from 'react';
import { render } from '@testing-library/react';
import HeadTags from '../../components/HeadTags';

const setup = () => {
  const props = {
    title: 'Start page',
    description: 'description',
  };

  return render(<HeadTags {...props} />);
};

describe('HeadTags', () => {
  it('should match snapshot ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
