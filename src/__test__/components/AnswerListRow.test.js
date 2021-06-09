import React from 'react';
import { render } from '@testing-library/react';
import AnswerListRow from '../../components/AnswerListRow';

const testForm = (defaults) => ({
  label: 'form label',
  formId: 'form7b',
  sections: [
    {
      label: '',
      fields: {
        field1: {
          label: 'page1field1Label',
          type: 'text-input',
          default: defaults.field1,
        },
        field2: {
          label: 'page1field2Label',
          type: 'text-input',
          default: defaults.field2,
        },
      },
    },
  ],
});

const setup = ({ data, defaults }) =>
  render(
    <AnswerListRow
      pageTemplate={testForm(defaults)}
      data={data}
      formBaseUrl="https://example.com/prefix"
    />
  );

describe('AnswerListRow', () => {
  it('Should display section if default is null', () => {
    const component = setup({
      data: {
        'answers.field1': 'field1 should show in snapshot',
        'answers.field2': 'field2 should show in snapshot',
      },
      defaults: {
        field1: null,
        field2: null,
      },
    });

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('Should display section if default is not null and input is not equal to default', () => {
    const component = setup({
      data: {
        'answers.field1': 'field1 should show in snapshot',
        'answers.field2': 'field2 should show in snapshot',
      },
      defaults: {
        field1: 'field1 default',
        field2: 'field2 default',
      },
    });

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('Should not display section if default is not null and input is equal to default', () => {
    const component = setup({
      data: {
        'answers.field1': 'field1 default',
        'answers.field2': 'field2 default',
      },
      defaults: {
        field1: 'field1 default',
        field2: 'field2 default',
      },
    });

    expect(component.asFragment()).toMatchSnapshot();
  });
});
