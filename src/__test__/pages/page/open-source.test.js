import React from 'react';
import { render } from '@testing-library/react';
import OpenSourcePage from '../../../pages/page/open-source';

describe('open-source', () => {
  it('should match snapshot', () => {
    const { container } = render(<OpenSourcePage />);
    const h1 = container.querySelector('h1');

    // Just check the OpenSource component rendered, the list of each license doesn't matter
    expect(h1.innerHTML).toMatch(
      'Open-source licenses for the COVID-19 Clinical Risk Assessment Tool'
    );
  });
});
