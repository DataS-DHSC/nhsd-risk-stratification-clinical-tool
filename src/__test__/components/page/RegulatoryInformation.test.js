import React from 'react';
import { render } from '@testing-library/react';
import { RegulatoryInformation } from '../../../components/page/RegulatoryInformation';

const setup = () => render(<RegulatoryInformation />);

describe('RegulatoryInformation', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });
});
