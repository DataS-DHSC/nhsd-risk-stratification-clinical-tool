import React from 'react';
import { render } from '@testing-library/react';
import CheckAnswersGenerator from '../../components/CheckAnswersGenerator';

const TEST_FORMS = {
  'test-form': {
    label: 'form1',
    sections: [
      {
        label: 'section1',
        fields: {
          field1: {
            fieldValidator: () => '',
          },
          field2: {
            fieldValidator: null,
          },
        },
      },
    ],
  },
};

const setup = ({ forms }) => {
  const props = {
    forms,
    prevData: {
      'answers.field1': 'test1',
      'answers.field2': 'test2',
    },
    fieldDefaults: {
      'test-form': {
        field1: '',
        field2: '',
      },
    },
    scoreUrl: '/score',
    formBaseUrl: '/ras/algoName',
  };

  return render(<CheckAnswersGenerator {...props} />);
};

describe('CheckAnswersGenerator', () => {
  it('should match snapshot when all validations pass', () => {
    const container = setup({ forms: TEST_FORMS });
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when some validations fails', () => {
    const forms = { ...TEST_FORMS };
    forms['test-form'].sections[0].fields.field1.fieldValidator = () =>
      'validation message';
    const container = setup({ forms });

    expect(container.asFragment()).toMatchSnapshot();
  });
});
