import React from 'react';
import { render } from '@testing-library/react';
import TermsOfUsePage from '../../../pages/page/terms-of-use';

const setup = () => render(<TermsOfUsePage />);

describe('terms-of-use', () => {
  it('should match snapshot', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
