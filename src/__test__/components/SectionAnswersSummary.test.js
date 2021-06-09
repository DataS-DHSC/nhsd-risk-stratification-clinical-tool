import React from 'react';
import { render, fireEvent, createEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import SectionAnswersSummary from '../../components/SectionAnswersSummary';

jest.mock('next/router');

const setup = ({ fields, data, defaults }) => {
  const props = {
    formKey: 'test-form',
    pageSection: { fields },
    data,
    pageUrl: 'test_url',
    defaults,
  };

  return render(<SectionAnswersSummary {...props} />);
};

describe('SectionAnswersSummary', () => {
  afterEach(jest.clearAllMocks);

  it('should match snapshot if data is from multiradio', () => {
    const fields = {
      testFieldMultiRadio: {
        label: 'multiradio label',
        type: 'multiradio',
        options: [
          { name: 'option1Radio', label: 'option1RadioLabel' },
          { name: 'option2Radio', label: 'option2RadioLabel' },
        ],
      },
    };

    const container = setup({
      fields,
      data: { 'answers.testFieldMultiRadio': 'option2Radio' },
      defaults: {
        'test-form': {
          testFieldMultiRadio: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot if data is from select input', () => {
    const fields = {
      testFieldSelect: {
        label: 'select label',
        type: 'select',
        options: [
          {
            label: 'subgroup1',
            options: [
              { name: 'option11Select', label: 'option11Select' },
              { name: 'option12Select', label: 'option12Select' },
            ],
          },
          {
            label: 'subgroup2',
            options: [{ name: 'option21Select', label: 'option21Select' }],
          },
        ],
      },
    };

    const container = setup({
      fields,
      data: { 'answers.testFieldSelect': 'option21Select' },
      defaults: {
        'test-form': {
          testFieldSelect: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot if data is from radio input', () => {
    const fields = {
      testFieldRadioYes: {
        label: 'radio label yes',
        type: 'radio',
      },
      testFieldRadioNo: {
        label: 'radio label no',
        type: 'radio',
      },
    };

    const container = setup({
      fields,
      data: {
        'answers.testFieldRadioYes': 'true',
        'answers.testFieldRadioNo': 'false',
      },
      defaults: {
        'test-form': {
          testFieldRadio: null,
          testFieldRadioNo: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot if data is from text input', () => {
    const fields = {
      testFieldText: {
        label: 'label text',
        type: 'text-input',
      },
    };

    const container = setup({
      fields,
      data: { 'answers.testFieldText': 'testValue' },
      defaults: {
        'test-form': {
          testFieldText: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when validation fails', () => {
    const fields = {
      testFieldText: {
        label: 'label text',
        type: 'text-input',
        fieldValidator: () => 'validation message',
      },
    };

    const container = setup({
      fields,
      data: { 'answers.testFieldText': 'testValue' },
      defaults: {
        'test-form': {
          testFieldText: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when value equals default', () => {
    const fields = {
      testFieldText: {
        label: 'label text',
        type: 'text-input',
      },
    };

    const container = setup({
      fields,
      data: { 'answers.testFieldText': null },
      defaults: {
        'test-form': {
          testFieldText: null,
        },
      },
    });

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should pass the correct url to the router when client side routing is enabled', () => {
    const router = { push: jest.fn() };
    useRouter.mockImplementationOnce(() => router);

    const fields = {
      testFieldRadio: {
        label: 'radio label',
        type: 'radio',
      },
    };

    const { container } = setup({
      fields,
      data: { 'answers.testFieldRadio': 'true' },
      clientSideRoutingEnabled: true,
      defaults: {
        'test-form': {
          testFieldRadio: null,
        },
      },
    });

    const element = container.querySelector('#change-button-testFieldRadio');
    const clickEvent = createEvent.click(element);
    fireEvent(element, clickEvent);

    expect(router.push).toHaveBeenCalledWith('test_url');
    expect(clickEvent.defaultPrevented).toBe(true);
  });
});
