import React from 'react';
import { render } from '@testing-library/react';
import PageReviewDates from '../../components/PageReviewDates';

const setup = (page) => render(<PageReviewDates page={page} />);

describe('PageReviewDates', () => {
  it('should match snapshot for static pages', () => {
    const container = setup('static');
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot for qcovid pages', () => {
    const container = setup('qcovid');
    expect(container.asFragment()).toMatchSnapshot();
  });
});
