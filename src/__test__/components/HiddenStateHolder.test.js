import React from 'react';
import { render } from '@testing-library/react';
import HiddenStateHolder from '../../components/HiddenStateHolder';

describe('HiddenStateHolder', () => {
  it('renders input fields as hidden', () => {
    const props = { stateFields: { field1: 'value1', field2: 'value2' } };
    const container = render(<HiddenStateHolder {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
