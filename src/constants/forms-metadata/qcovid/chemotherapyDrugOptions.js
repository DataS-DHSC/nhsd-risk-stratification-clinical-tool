import {
  getObservationOption,
  VALUE_OBSERVATIONS,
} from '../../../algorithm-mapping/qcovid/codeable-concept-values-mapping';

const DISPLAY_ORDER = [
  'QCOVID_CODE_NONE',
  'SACT_CHEMOTHERAPY_C',
  'SACT_CHEMOTHERAPY_B',
  'SACT_CHEMOTHERAPY_A',
];

const LABELS = {
  QCOVID_CODE_NONE: '',
  SACT_CHEMOTHERAPY_C: 'Group C - Very highly immunosuppressive drugs',
  SACT_CHEMOTHERAPY_B: 'Group B - Highly immunosuppressive drugs',
  SACT_CHEMOTHERAPY_A:
    'Group A - Immunosuppressants or agents used with chemotherapy regimens',
};

/**
 * The business requirement is to default to no chemotherapy, but to display the drugs in
 * order of those with the highest risk for Covid at the top of the list, going down to lowest
 * risk. Within the bands the drugs should be sorted in display text order

 * @return {*[]}
 */
export const chemotherapyDrugOptions = () => {
  const chemotherapy = Object.entries(VALUE_OBSERVATIONS).reduce(
    (acc, [label, value]) => {
      const CLINICAL_CODE = value.snomedCode;
      if (Object.keys(acc).includes(CLINICAL_CODE)) {
        acc[CLINICAL_CODE].push(label);
      }
      return acc;
    },
    {
      SACT_CHEMOTHERAPY_A: [],
      SACT_CHEMOTHERAPY_B: [],
      SACT_CHEMOTHERAPY_C: [],
    }
  );

  chemotherapy.QCOVID_CODE_NONE = ['no-chemotherapy-in-the-last-12-months'];

  return DISPLAY_ORDER.reduce((acc, category) => {
    const value = {
      label: LABELS[category],
      options: chemotherapy[category]
        .map((drug) => getObservationOption(drug))
        .sort((a, b) => a.label.localeCompare(b.label)),
    };

    acc.push(value);
    return acc;
  }, []);
};
