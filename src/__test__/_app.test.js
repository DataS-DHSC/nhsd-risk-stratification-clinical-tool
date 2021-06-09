import React from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import Router from 'next/router';
import MyApp from '../pages/_app';
import Score from '../pages/ras/qcovid/score';

const setup = (pageProps) => {
  const props = {
    Component: Score,
    pageProps,
  };

  return render(
    <RouterContext.Provider value={Router}>
      <MyApp {...props} />
    </RouterContext.Provider>
  );
};

describe('_app', () => {
  it('should match snapshot ', () => {
    const container = setup({
      success: false,
      correlationId: 'ead1c4fe',
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot if error occurs', () => {
    const container = setup({
      error: { statusCode: 400 },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });
});
