import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';
import { minMaxValidator } from '../../../utils/field_validators/minMaxValidator';

export const formId = 'body-mass-index';

export const BODY_MASS_INDEX_FORM = {
  label: "Calculate the patient's body mass index (BMI)",
  formId,
  sections: [
    {
      label: '',
      fields: {
        height: {
          label: getLabelForField('height'),
          ariaLabel: 'Height in centimetres',
          hint:
            'Without decimal places. The service can only give a result for a height from 140cm to 210cm.',
          hintAriaLabel:
            'Without decimal places. The service can only give a result for a height from 140 centimetres to 210 centimetres.',
          conversion: 'cm-to-ft-in',
          type: 'numeric-input',
          min: 140,
          max: 210,
          fieldValidator: (value) =>
            value ? minMaxValidator(value, 140, 210) : '',
          default: '',
        },
        weight: {
          label: getLabelForField('weight'),
          ariaLabel: 'Weight in kilograms',
          hint:
            'Without decimal places. The service can only give a result for a weight from 40kg to 180kg.',
          hintAriaLabel:
            'Without decimal places. The service can only give a result for a weight from 40 kilograms to 180 kilograms.',
          conversion: 'kg-to-st-lb',
          type: 'numeric-input',
          min: 40,
          max: 180,
          fieldValidator: (value) =>
            value ? minMaxValidator(value, 40, 180) : '',
          default: '',
        },
        // not part of the qCovid inputs
        'bmi-calc': {
          label: "The patient's BMI score is: ",
          default: 'Enter height and weight to calculate BMI.',
          type: 'bmi-calc',
          links: ['weight', 'height'],
        },
      },
    },
  ],
};
