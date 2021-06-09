import { getObservationOption } from '../../../algorithm-mapping/qcovid/codeable-concept-values-mapping';
import { getLabelForField } from '../../../algorithm-mapping/qcovid/fields-mapping';

function DiabetesTypeHint() {
  return (
    <span className="black-hint">
      If the patient has another type of diabetes such as MODY or gestational
      diabetes {/* eslint-disable-next-line */}
      <a
        href="https://digital.nhs.uk/coronavirus/risk-assessment/clinical-tool/guidance-for-clinicians#how-to-complete-the-risk-assessment"
        target="_blank"
        rel="noopener"
      >
        find out what type you should select (opens in new window)
      </a>
    </span>
  );
}
const formId = 'metabolic-renal-liver-conditions';

export const METABOLIC_RENAL_FORM = {
  label: 'Metabolic, renal & liver conditions',
  formId,
  sections: [
    {
      label: 'Metabolic',
      fields: {
        'diabetes-type': {
          label: getLabelForField('diabetes-type'),
          hint: DiabetesTypeHint(),
          type: 'multiradio',
          default: 'has-no-diabetes',
          inline: true,
          options: [
            getObservationOption('has-no-diabetes'),
            getObservationOption('has-type-1-diabetes'),
            getObservationOption('has-type-2-diabetes'),
          ],
        },
        'fracture-of-hip': {
          label: getLabelForField('fracture-of-hip'),
          type: 'radio',
          default: 'false',
          inline: true,
        },
      },
    },
    {
      label: 'Renal',
      fields: {
        'kidney-disease': {
          label: getLabelForField('kidney-disease'),
          type: 'select',
          required: true,
          default: 'no-cdk-or-has-ckd-1-or-2',
          options: [
            {
              label: '',
              options: [
                getObservationOption('no-cdk-or-has-ckd-1-or-2'),
                getObservationOption('has-cdk3'),
                getObservationOption('has-cdk4'),
                getObservationOption('has-cdk5-without-dialysis-or-transplant'),
                getObservationOption(
                  'has-cdk5-with-dialysis-in-the-last-12-months'
                ),
                getObservationOption('has-cdk5-with-transplant'),
              ],
            },
          ],
        },
      },
    },
    {
      label: 'Liver',
      fields: {
        liver: {
          label: getLabelForField('liver'),
          type: 'radio',
          default: 'false',
          inline: true,
        },
      },
    },
  ],
};
