import React from 'react';
import { render } from '@testing-library/react';
import ServiceLimitationsPanel from '../../components/ServiceLimitationsPanel';

const setup = () => render(<ServiceLimitationsPanel />);

describe('ServiceLimitationsPanel', () => {
  it('ServiceLimitationsPanel should render', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
