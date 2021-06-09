import React from 'react';
import { render } from '@testing-library/react';
import TermsOfUse from '../../../components/page/TermsOfUse';

const setup = () => render(<TermsOfUse />);

describe('TermsOfUse', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
