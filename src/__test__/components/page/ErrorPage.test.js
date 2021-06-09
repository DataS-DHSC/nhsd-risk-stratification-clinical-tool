import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from '../../../components/page/ErrorPage';

const setup = (statusCode) => {
  const props = {
    statusCode,
  };

  return render(<ErrorPage {...props} />);
};

describe('ErrorPage', () => {
  it('should match snapshot when 400', () => {
    const container = setup(400);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when 403', () => {
    const container = setup(403);

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when 404', () => {
    const container = setup(404);

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when 503', () => {
    const container = setup(503);

    expect(container.asFragment()).toMatchSnapshot();
  });
});
