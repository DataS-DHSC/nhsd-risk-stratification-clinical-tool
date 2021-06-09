import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';

const formId = 'respiratory-diseases-and-treatments';

export const RESP_DISEASES_TREATMENTS_FORM = {
  label: 'Respiratory diseases and treatments',
  formId,
  sections: [
    {
      label: '',
      fields: {
        'has-asthma': {
          label: getLabelForField('has-asthma'),
          type: 'radio',
          default: 'false',
        },
        'taking-anti-leukotriene-or-beta2-agonists': {
          label: getLabelForField('taking-anti-leukotriene-or-beta2-agonists'),
          hint:
            'Prescribed by a clinician four or more times in the last 6 months.',
          type: 'radio',
          default: 'false',
        },
        'has-chronic-obstructive-pulmonary-disease': {
          label: getLabelForField('has-chronic-obstructive-pulmonary-disease'),
          type: 'radio',
          default: 'false',
        },
        'has-cystic-fibrosis-bronchiectasis-or-alveolitis': {
          label: getLabelForField(
            'has-cystic-fibrosis-bronchiectasis-or-alveolitis'
          ),
          type: 'radio',
          default: 'false',
        },
        'has-pulmonary-hypertension-or-fibrosis': {
          label: getLabelForField('has-pulmonary-hypertension-or-fibrosis'),
          type: 'radio',
          default: 'false',
        },
      },
    },
  ],
};
