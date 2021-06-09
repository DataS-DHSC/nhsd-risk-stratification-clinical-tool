import React from 'react';
import { render } from '@testing-library/react';
import TransactionalPageTemplate from '../../components/TransactionalPageTemplate';
import { ROUTE_QCOVID } from '../../constants/routes';
import { QCOVID_PAGE_NAMES } from '../../constants/forms-metadata/qcovid/qcovid-forms';

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

describe('transactional page template', () => {
  it('snapshot should be built from prevData when client side routing disabled', () => {
    const context = jest.fn();
    const form = { formId: 'form-id', label: 'form-label', sections: [] };
    context.mockImplementationOnce(() => [null, jest.fn()]);

    const container = render(
      <TransactionalPageTemplate
        prevData={prevData}
        form={form}
        context={context}
        reviewDatesSource="qcovid"
        formBaseUrl={ROUTE_QCOVID}
        pageNames={QCOVID_PAGE_NAMES}
      />
    );

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('snapshot should be built from context data when client side routing enabled', () => {
    const context = jest.fn();
    const form = { formId: 'form-id', label: 'form-label', sections: [] };
    context.mockImplementationOnce(() => [contextData, jest.fn()]);

    const container = render(
      <TransactionalPageTemplate
        prevData={prevData}
        form={form}
        context={context}
        reviewDatesSource="qcovid"
        formBaseUrl={ROUTE_QCOVID}
        pageNames={QCOVID_PAGE_NAMES}
      />
    );

    expect(container.asFragment()).toMatchSnapshot();
  });
});
