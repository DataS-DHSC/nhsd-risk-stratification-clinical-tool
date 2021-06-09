import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';

const formId = 'immune-and-haematological-conditions';

export const IMMU_HAEMA_CONDITIONS_FORM = {
  label: 'Immune & haematological conditions',
  formId,
  sections: [
    {
      label: 'Autoimmune',
      fields: {
        'rheumatoid-arthritis-or-sle': {
          label: getLabelForField('rheumatoid-arthritis-or-sle'),
          type: 'radio',
          default: 'false',
        },
      },
    },
    {
      label: 'Haematological and immunodeficiency',
      fields: {
        'sickle-cell-or-immune-deficiency': {
          label: getLabelForField('sickle-cell-or-immune-deficiency'),
          hint:
            'This includes conditions such as sickle cell disease, severe combined immunodeficiency syndromes or HIV',
          type: 'radio',
          default: 'false',
        },
        'thrombosis-or-pulmonary-embolus': {
          label: getLabelForField('thrombosis-or-pulmonary-embolus'),
          type: 'radio',
          default: 'false',
        },
      },
    },
  ],
};
