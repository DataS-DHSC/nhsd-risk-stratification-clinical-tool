import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import ClinicalQuestionPage from '../../../pages/ras/qcovid/[clinicalPage]';
import QCovidContextProvider from '../../../context/qcovid/qcovid-context';
import { QCOVID_PAGE_NAMES } from '../../../constants/forms-metadata/qcovid/qcovid-forms';

jest.mock('next/router');

describe('QCovid transactional page', () => {
  test.each([...QCOVID_PAGE_NAMES, 'notfoundpagexxx'])(
    '%p: should match snapshot',
    (_pageId) => {
      const router = {
        push: jest.fn(),
        query: { clinicalPage: _pageId },
      };
      useRouter.mockImplementationOnce(() => router);
      const props = {
        prevData: {
          field1: 'field1prevData',
          field2: 'field2prevData',
          csrfToken: 'csrfToken',
          headers: '{"correlationId":"5383302b-f729-4076-97d5-c428b26ef5dd"}',
        },
      };

      const container = render(
        <QCovidContextProvider>
          <ClinicalQuestionPage {...props} />
        </QCovidContextProvider>
      );

      expect(container.asFragment()).toMatchSnapshot();
    }
  );
});
