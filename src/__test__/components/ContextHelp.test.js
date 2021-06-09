import React from 'react';
import { render } from '@testing-library/react';
import ContextHelp from '../../components/ContextHelp';

const setup = (props) => render(<ContextHelp {...props} />);

describe('ContextHelp', () => {
  it('should match snapshot for top link', () => {
    const container = setup({ labelText: 'More help is available' });
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot for title link', () => {
    const container = setup({
      helpPageReference: 'patient-details',
      labelText: 'Patient details help',
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
