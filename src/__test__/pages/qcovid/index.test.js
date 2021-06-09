import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from '../../../pages/ras/qcovid';
import QCovidContextProvider from '../../../context/qcovid/qcovid-context';

describe('QCovid Index', () => {
  it('should match snapshot ', () => {
    const props = {
      prevData: {
        csrfToken: 'csrfToken',
        headers: '{"correlationId":"5383302b-f729-4076-97d5-c428b26ef5dd"}',
      },
    };

    const container = render(
      <QCovidContextProvider>
        <IndexPage {...props} />
      </QCovidContextProvider>
    );

    expect(container.asFragment()).toMatchSnapshot();
  });
});
