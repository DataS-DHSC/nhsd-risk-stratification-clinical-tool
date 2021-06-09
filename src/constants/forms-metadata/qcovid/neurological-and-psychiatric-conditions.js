import { getObservationOption } from '../../../algorithm-mapping/qcovid/codeable-concept-values-mapping';
import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';

const formId = 'neurological-and-psychiatric-conditions';

export const NEURO_PSYCH_CONDITIONS_FORM = {
  label: 'Neurological & psychiatric conditions',
  formId,
  sections: [
    {
      label: '',
      fields: {
        'has-epilepsy': {
          label: getLabelForField('has-epilepsy'),
          default: 'false',
          type: 'radio',
        },
        tia: {
          label: getLabelForField('tia'),
          default: 'false',
          type: 'radio',
        },
        'has-motor-neurone-multiple-sclerosis-myasthenia': {
          label: getLabelForField(
            'has-motor-neurone-multiple-sclerosis-myasthenia'
          ),
          type: 'radio',
          default: 'false',
        },
        'has-parkinsons-disease': {
          label: getLabelForField('has-parkinsons-disease'),
          type: 'radio',
          default: 'false',
        },
        'has-dementia': {
          label: getLabelForField('has-dementia'),
          type: 'radio',
          default: 'false',
        },
        'has-cerebral-palsy': {
          label: getLabelForField('has-cerebral-palsy'),
          type: 'radio',
          default: 'false',
        },
        'learning-disability-or-downs-syndrome': {
          label: getLabelForField('learning-disability-or-downs-syndrome'),
          hint:
            'Learning disability is a broad group and is not always well coded in clinical notes. It includes those on the learning disability register, individuals with mild to severe learning disabilities, some people with autism and a range of similar conditions. Clinical judgement is required.',
          type: 'multiradio',
          inline: false,
          default: 'has-no-learning-disability-or-downs-syndrome',
          options: [
            getObservationOption(
              'has-no-learning-disability-or-downs-syndrome'
            ),
            getObservationOption(
              'has-learning-disability-excluding-downs-syndrome'
            ),
            getObservationOption('has-downs-syndrome'),
          ],
        },
        'has-a-severe-mental-illness': {
          label: getLabelForField('has-a-severe-mental-illness'),
          hint:
            'This includes diagnoses such as schizophrenia, bipolar disorder, or severe depression which has been severe enough to result in a diagnosis by the GP or hospital.',
          type: 'radio',
          default: 'false',
        },
      },
    },
  ],
};
