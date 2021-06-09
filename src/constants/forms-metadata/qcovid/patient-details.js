import { getObservationOption } from '../../../algorithm-mapping/qcovid/codeable-concept-values-mapping';
import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';
import { postCodeValidator } from '../../../utils/field_validators/postcodeValidator';
import { minMaxValidator } from '../../../utils/field_validators/minMaxValidator';

const PLEASE_SELECT_OPTION = {
  label: '',
  options: [
    {
      name: 'please-select',
      label: 'Please select',
    },
  ],
};

export const PATIENT_DETAILS_FORM = {
  label: 'Patient details',
  formId: 'patient-details',
  sections: [
    {
      label: '',
      fields: {
        age: {
          label: getLabelForField('age'),
          hint:
            'There is not currently enough data to accurately risk score people under 19 or over 100 years in age',
          type: 'numeric-input',
          min: 19,
          max: 100,
          required: true,
          fieldValidator: (value) =>
            value
              ? minMaxValidator(Number(value), 19, 100)
              : 'Please fill in this field',
          default: null,
        },
        sex: {
          label: getLabelForField('sex'),
          hint:
            'There is not currently enough data to accurately risk score intersex or trans people, please use sex registered at birth',
          type: 'multiradio',
          inline: true,
          options: [
            getObservationOption('female'),
            getObservationOption('male'),
          ],
          default: null,
        },
        'ethnic-group': {
          label: getLabelForField('ethnic-group'),
          type: 'select',
          required: true,
          options: [
            PLEASE_SELECT_OPTION,
            {
              label: 'Asian or Asian British',
              options: [
                getObservationOption('bangladeshi'),
                getObservationOption('chinese'),
                getObservationOption('indian'),
                getObservationOption('pakistani'),
                getObservationOption('other-asian'),
              ],
            },
            {
              label: 'Black, African, Black British or Caribbean',
              options: [
                getObservationOption('african'),
                getObservationOption('caribbean'),
                getObservationOption('other-black'),
              ],
            },
            {
              label: 'Mixed or Multiple ethnic groups',
              options: [
                getObservationOption('asian-white'),
                getObservationOption('african-white'),
                getObservationOption('caribbean-white'),
                getObservationOption('other-mixed'),
              ],
            },
            {
              label: 'White',
              options: [
                getObservationOption('british'),
                getObservationOption('irish'),
                getObservationOption('other-white'),
              ],
            },
            {
              label: 'Other ethnic group',
              options: [getObservationOption('other-ethnic-group')],
            },
            {
              label: '',
              options: [getObservationOption('not-saying')],
            },
          ],
          default: null,
        },
        housing: {
          label: getLabelForField('housing'),
          type: 'multiradio',
          inline: false,
          required: true,
          options: [
            getObservationOption('not-homeless-or-resident-of-care-home'),
            getObservationOption('homeless'),
            getObservationOption('resident-of-a-care-home'),
          ],
          default: null,
        },
        postcode: {
          label: getLabelForField('postcode'),
          hint:
            "Postcode is used to determine the level of social deprivation in the patient's area of residence. Leave blank if unknown.",
          type: 'text-input',
          fieldValidator: postCodeValidator,
          default: '',
        },
      },
    },
  ],
};
