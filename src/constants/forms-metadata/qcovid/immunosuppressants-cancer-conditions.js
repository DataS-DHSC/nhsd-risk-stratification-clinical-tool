import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';
import { chemotherapyDrugOptions } from './chemotherapyDrugOptions';

export const formId = 'immunosuppressants-cancer-conditions';

export const IMMUNO_CANCER_CONDITIONS_FORM = {
  label: 'Immunosuppressants, cancer conditions & treatments',
  formId,
  sections: [
    {
      label: '',
      fields: {
        'lung-or-oral-cancer': {
          label: getLabelForField('lung-or-oral-cancer'),
          type: 'radio',
          default: 'false',
        },
        'solid-organ-transplant': {
          label: getLabelForField('solid-organ-transplant'),
          type: 'radio',
          default: 'false',
        },
        'cancer-of-the-blood-or-bone-marrow': {
          label: getLabelForField('cancer-of-the-blood-or-bone-marrow'),
          type: 'radio',
          default: 'false',
        },
        'bone-marrow-or-stem-cell-transplant': {
          label: getLabelForField('bone-marrow-or-stem-cell-transplant'),
          type: 'radio',
          default: 'false',
        },
        'had-radiotherapy-last-6-months': {
          label: getLabelForField('had-radiotherapy-last-6-months'),
          type: 'radio',
          default: 'false',
        },
        'chemotherapy-in-the-last-12-months': {
          label: getLabelForField('chemotherapy-in-the-last-12-months'),
          hint:
            "If they've had multiple chemotherapy agents, select the most immunosuppressive (of Group C first, then B, then A)",
          type: 'select',
          required: true,
          default: 'no-chemotherapy-in-the-last-12-months',
          options: chemotherapyDrugOptions(),
        },
        'prescribed-oral-prednisolone-steroids': {
          label: getLabelForField('prescribed-oral-prednisolone-steroids'),
          hint:
            'Prescribed by a clinician four or more times in the last 6 months.',
          type: 'radio',
          default: 'false',
        },
        'prescribed-immunosuppressants': {
          label: getLabelForField('prescribed-immunosuppressants'),
          hint:
            'Prescribed by a clinician four or more times in the last 6 months.',
          type: 'radio',
          default: 'false',
        },
      },
    },
  ],
};
