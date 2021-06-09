import React from 'react';
import { render } from '@testing-library/react';
import FailureSummary from '../../components/FailurePage';

const setup = (correlationId) =>
  render(<FailureSummary correlationId={correlationId} />);

describe('FailureSummary', () => {
  it('should match snapshot when correlation id is present ', () => {
    const container = setup('123-abc');
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when correlation id is empty ', () => {
    const container = setup();
    expect(container.asFragment()).toMatchSnapshot();
  });
});
