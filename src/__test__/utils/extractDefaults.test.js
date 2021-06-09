import {
  extractFormDefaults,
  extractSectionDefaults,
  extractDefaults,
  mergeFromEntries,
} from '../../utils/extractDefaults';
import { QCOVID_FORMS } from '../../constants/forms-metadata/qcovid/qcovid-forms';

describe('extractDefaults', () => {
  it('Should extract form defaults from qcovid metadata', async () => {
    const expectedDefaults = {
      'patient-details': {
        age: null,
        sex: null,
        'ethnic-group': null,
        housing: null,
        postcode: '',
      },

      'body-mass-index': {
        height: '',
        weight: '',
      },

      'cardiovascular-diseases': {
        'has-atrial-fibrillation': 'false',
        'has-coronary-heart-disease': 'false',
        'has-heart-failure': 'false',
        'has-congenital-heart-disease': 'false',
        'has-peripheral-vascular-disease': 'false',
      },

      'respiratory-diseases-and-treatments': {
        'has-asthma': 'false',
        'taking-anti-leukotriene-or-beta2-agonists': 'false',
        'has-chronic-obstructive-pulmonary-disease': 'false',
        'has-cystic-fibrosis-bronchiectasis-or-alveolitis': 'false',
        'has-pulmonary-hypertension-or-fibrosis': 'false',
      },

      'metabolic-renal-liver-conditions': {
        'diabetes-type': 'has-no-diabetes',
        'fracture-of-hip': 'false',
        'kidney-disease': 'no-cdk-or-has-ckd-1-or-2',
        liver: 'false',
      },

      'neurological-and-psychiatric-conditions': {
        'has-epilepsy': 'false',
        tia: 'false',
        'has-motor-neurone-multiple-sclerosis-myasthenia': 'false',
        'has-parkinsons-disease': 'false',
        'has-dementia': 'false',
        'has-cerebral-palsy': 'false',
        'learning-disability-or-downs-syndrome':
          'has-no-learning-disability-or-downs-syndrome',
        'has-a-severe-mental-illness': 'false',
      },

      'immune-and-haematological-conditions': {
        'rheumatoid-arthritis-or-sle': 'false',
        'sickle-cell-or-immune-deficiency': 'false',
        'thrombosis-or-pulmonary-embolus': 'false',
      },

      'immunosuppressants-cancer-conditions': {
        'lung-or-oral-cancer': 'false',
        'solid-organ-transplant': 'false',
        'cancer-of-the-blood-or-bone-marrow': 'false',
        'bone-marrow-or-stem-cell-transplant': 'false',
        'had-radiotherapy-last-6-months': 'false',
        'chemotherapy-in-the-last-12-months':
          'no-chemotherapy-in-the-last-12-months',
        'prescribed-oral-prednisolone-steroids': 'false',
        'prescribed-immunosuppressants': 'false',
      },
    };

    const defaults = extractFormDefaults(QCOVID_FORMS);

    expect(expectedDefaults).toEqual(defaults);
  });

  it('Should extract defaults from qcovid metadata', async () => {
    const expectedDefaults = {
      age: null,
      sex: null,
      'ethnic-group': null,
      housing: null,
      postcode: '',
      height: '',
      weight: '',
      'has-atrial-fibrillation': 'false',
      'has-coronary-heart-disease': 'false',
      'has-heart-failure': 'false',
      'has-congenital-heart-disease': 'false',
      'has-peripheral-vascular-disease': 'false',
      'has-asthma': 'false',
      'taking-anti-leukotriene-or-beta2-agonists': 'false',
      'has-chronic-obstructive-pulmonary-disease': 'false',
      'has-cystic-fibrosis-bronchiectasis-or-alveolitis': 'false',
      'has-pulmonary-hypertension-or-fibrosis': 'false',
      'diabetes-type': 'has-no-diabetes',
      'fracture-of-hip': 'false',
      'kidney-disease': 'no-cdk-or-has-ckd-1-or-2',
      liver: 'false',
      'has-epilepsy': 'false',
      tia: 'false',
      'has-motor-neurone-multiple-sclerosis-myasthenia': 'false',
      'has-parkinsons-disease': 'false',
      'has-dementia': 'false',
      'has-cerebral-palsy': 'false',
      'learning-disability-or-downs-syndrome':
        'has-no-learning-disability-or-downs-syndrome',
      'has-a-severe-mental-illness': 'false',
      'rheumatoid-arthritis-or-sle': 'false',
      'sickle-cell-or-immune-deficiency': 'false',
      'thrombosis-or-pulmonary-embolus': 'false',
      'lung-or-oral-cancer': 'false',
      'solid-organ-transplant': 'false',
      'cancer-of-the-blood-or-bone-marrow': 'false',
      'bone-marrow-or-stem-cell-transplant': 'false',
      'had-radiotherapy-last-6-months': 'false',
      'chemotherapy-in-the-last-12-months':
        'no-chemotherapy-in-the-last-12-months',
      'prescribed-oral-prednisolone-steroids': 'false',
      'prescribed-immunosuppressants': 'false',
    };

    const defaults = extractDefaults(QCOVID_FORMS);

    expect(expectedDefaults).toEqual(defaults);
  });

  it('Should extract section defaults from qcovid metadata patient details', async () => {
    const expectedDefaults = {
      field1: null,
      field2: 'test string',
      field3: 'false',
    };

    const section = {
      fields: {
        field1: {
          default: null,
        },
        field2: {
          default: 'test string',
        },
        field3: {
          default: 'false',
        },
      },
    };

    const defaults = extractSectionDefaults(section);

    expect(expectedDefaults).toEqual(defaults);
  });

  it('Should extract field defaults from fields metadata', async () => {
    const expectedDefaults = {
      field1: null,
      field2: 'test string',
      field3: 'false',
    };

    const fields = {
      field1: {
        default: null,
      },
      field2: {
        default: 'test string',
      },
      field3: {
        default: 'false',
      },
    };

    let defaults = mergeFromEntries(fields, ['field1', fields.field1.default]);
    defaults = mergeFromEntries(fields, ['field2', fields.field2.default]);
    defaults = mergeFromEntries(fields, ['field3', fields.field3.default]);

    expect(expectedDefaults).toEqual(defaults);
  });
});
