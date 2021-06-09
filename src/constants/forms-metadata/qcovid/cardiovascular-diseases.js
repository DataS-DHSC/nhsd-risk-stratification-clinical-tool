import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';

const formId = 'cardiovascular-diseases';

export const CARDIOVASCULAR_DISEASES_FORM = {
  label: 'Cardiovascular diseases',
  formId,
  sections: [
    {
      label: '',
      fields: {
        'has-atrial-fibrillation': {
          label: getLabelForField('has-atrial-fibrillation'),
          type: 'radio',
          default: 'false',
        },
        'has-coronary-heart-disease': {
          label: getLabelForField('has-coronary-heart-disease'),
          type: 'radio',
          default: 'false',
        },
        'has-heart-failure': {
          label: getLabelForField('has-heart-failure'),
          type: 'radio',
          default: 'false',
        },
        'has-congenital-heart-disease': {
          label: getLabelForField('has-congenital-heart-disease'),
          type: 'radio',
          default: 'false',
        },
        'has-peripheral-vascular-disease': {
          label: getLabelForField('has-peripheral-vascular-disease'),
          type: 'radio',
          default: 'false',
        },
      },
    },
  ],
};
