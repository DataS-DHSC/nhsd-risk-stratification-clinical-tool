import React from 'react';
import { render } from '@testing-library/react';
import { useQCovidContext } from '../../../context/qcovid/qcovid-context';
import CheckYourAnswers from '../../../pages/ras/qcovid/check-your-answers';

jest.mock('../../../context/qcovid/qcovid-context');

const prevData = {
  field1: 'field1prevData',
  field2: 'field2prevData',
  csrfToken: 'csrfToken',
  headers: '{"correlationId":"5383302b-f729-4076-97d5-c428b26ef5dd"}',
};

const contextData = {
  field1: 'field1ContextData',
  field2: 'field1ContextData',
};

describe('check-your-answers', () => {
  afterEach(jest.clearAllMocks);

  it('snapshot should be built from prevData when client side routing disabled', () => {
    useQCovidContext.mockImplementationOnce(() => [null, jest.fn()]);

    const container = render(<CheckYourAnswers prevData={prevData} />);

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('snapshot should be built from context data when client side routing enabled', () => {
    useQCovidContext.mockImplementationOnce(() => [contextData, jest.fn()]);

    const container = render(<CheckYourAnswers prevData={prevData} />);

    expect(container.asFragment()).toMatchSnapshot();
  });
});
