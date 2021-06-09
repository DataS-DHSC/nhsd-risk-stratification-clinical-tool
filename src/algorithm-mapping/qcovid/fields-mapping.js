const {
  SNOMED_CODING_SYSTEM,
  QCOVID_CODING_SYSTEM,
  observationQuantityValue,
  observationCodeableConceptQCOVID,
  observationString,
  observationBoolean,
} = require('../observationValueGenerators');

/**
 * Includes all the information needed to convert UI form fields into observations
 * understood by the calc engine
 */
export const QCOVID_FIELD_MAPPING = {
  age: {
    snomedCode: '424144002',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationQuantityValue(value, 'years'),
    display: 'Age (19-100)',
  },
  sex: {
    snomedCode: '734000001',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, SNOMED_CODING_SYSTEM),
    display: 'Sex registered at birth',
  },
  'ethnic-group': {
    snomedCode: '364699009',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, SNOMED_CODING_SYSTEM),
    display: 'Ethnicity',
  },
  housing: {
    snomedCode: '724741000000100',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, SNOMED_CODING_SYSTEM),
    display: 'Housing category',
  },
  postcode: {
    snomedCode: '184102003',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationString,
    display: 'Postcode',
  },
  height: {
    snomedCode: '50373000',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) => observationQuantityValue(value, 'cm'),
    display: 'Height in cm',
  },
  weight: {
    snomedCode: '27113001',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) => observationQuantityValue(value, 'kg'),
    display: 'Weight in kg',
  },
  'has-atrial-fibrillation': {
    snomedCode: '49436004',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
    display: 'Has atrial fibrillation',
  },
  'has-coronary-heart-disease': {
    snomedCode: 'CORONARY_HEART_DISEASE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
    display: 'Has coronary heart disease',
  },
  'has-heart-failure': {
    snomedCode: 'HEART_FAILURE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
    display: 'Has heart failure',
  },
  'has-congenital-heart-disease': {
    display:
      'Has congenital heart disease or has had surgery for it in the past',
    snomedCode: 'CONGENITAL_HEART_DISEASE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-peripheral-vascular-disease': {
    display: 'Has peripheral vascular disease',
    snomedCode: 'PERIPHERAL_VASCULAR_DISEASE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-asthma': {
    display: 'Has asthma',
    snomedCode: 'ASTHMA',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'taking-anti-leukotriene-or-beta2-agonists': {
    display: 'Is taking anti-leukotriene or long acting beta2-agonists (LABA)',
    snomedCode: 'ANTI_LEUKOTRIENE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-chronic-obstructive-pulmonary-disease': {
    display: 'Has chronic obstructive pulmonary disease (COPD)',
    snomedCode: 'COPD',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-cystic-fibrosis-bronchiectasis-or-alveolitis': {
    display: 'Has cystic fibrosis, bronchiectasis or alveolitis',
    snomedCode: 'CYSTIC_FIBROSIS',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-pulmonary-hypertension-or-fibrosis': {
    display: 'Has pulmonary hypertension or pulmonary fibrosis',
    snomedCode: 'HYPERTENSION',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'diabetes-type': {
    display: 'Diabetes type',
    snomedCode: 'DIABETES_TYPE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, QCOVID_CODING_SYSTEM),
  },
  'fracture-of-hip': {
    display:
      'Has had a prior osteoporotic fracture of the hip, wrist, spine or humerus',
    snomedCode: 'FRACTURE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'kidney-disease': {
    display: 'Kidney disease',
    snomedCode: 'KIDNEY_DISEASE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, QCOVID_CODING_SYSTEM),
  },
  liver: {
    display: 'Has cirrhosis of the liver',
    snomedCode: '197279005',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-epilepsy': {
    display: 'Has epilepsy',
    snomedCode: 'EPILEPSY',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  tia: {
    display: 'Has had a stroke or TIA',
    snomedCode: 'STROKE_TIA',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-motor-neurone-multiple-sclerosis-myasthenia': {
    display:
      "Has motor neurone disease, multiple sclerosis, myasthenia, or Huntington's disease",
    snomedCode: 'MND',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-parkinsons-disease': {
    display: "Has Parkinson's disease",
    snomedCode: '49049000',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-dementia': {
    display: 'Has dementia',
    snomedCode: '52448006',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'has-cerebral-palsy': {
    display: 'Has cerebral palsy',
    snomedCode: '128188000',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'learning-disability-or-downs-syndrome': {
    display: "Has a learning disability or Down's syndrome",
    snomedCode: '110359009',
    system: SNOMED_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, QCOVID_CODING_SYSTEM),
  },
  'has-a-severe-mental-illness': {
    display: 'Has a severe mental illness',
    snomedCode: 'SEVERE_MENTAL_ILLNESS',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'rheumatoid-arthritis-or-sle': {
    display:
      'Has rheumatoid arthritis, SLE or a seronegative arthritis such as Ankylosing Spondylitis',
    snomedCode: 'RHEUMATOID_ARTHRITIS',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'sickle-cell-or-immune-deficiency': {
    display: 'Has a condition that means they may be immunosuppressed',
    snomedCode: 'SICKLE_CELL_DISEASE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'thrombosis-or-pulmonary-embolus': {
    display: 'Has had thrombosis or pulmonary embolus',
    snomedCode: 'THROMBOSIS',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'lung-or-oral-cancer': {
    display: 'Has lung or oral cancer',
    snomedCode: 'LUNG_ORAL_CANCER',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'solid-organ-transplant': {
    display:
      'Has had a solid organ transplant (lung, liver, stomach, pancreas, spleen, heart or thymus)',
    snomedCode: 'ORGAN_TRANSPLANT',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'cancer-of-the-blood-or-bone-marrow': {
    display:
      'Has a cancer of the blood or bone marrow such as leukaemia, myelodysplastic syndromes, lymphoma or myeloma and is at any stage of treatment',
    snomedCode: 'BLOOD_CANCER',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'bone-marrow-or-stem-cell-transplant': {
    display: 'Has had bone marrow or stem cell transplant in the last 6 months',
    snomedCode: 'BONE_MARROW_TRANSPLANT',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'had-radiotherapy-last-6-months': {
    display: 'Has had radiotherapy in the last 6 months',
    snomedCode: 'RADIOTHERAPY',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'chemotherapy-in-the-last-12-months': {
    display: 'Has had chemotherapy in the last 12 months',
    snomedCode: 'CHEMOTHERAPY',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: (value) =>
      observationCodeableConceptQCOVID(value, QCOVID_CODING_SYSTEM),
  },
  'prescribed-oral-prednisolone-steroids': {
    display: 'Has been prescribed oral prednisolone',
    snomedCode: 'ORAL_PREDNISOLONE',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
  'prescribed-immunosuppressants': {
    display: 'Has been prescribed immunosuppressants',
    snomedCode: 'IMMUNOSUPPRESSANTS',
    system: QCOVID_CODING_SYSTEM,
    observationValueGenerator: observationBoolean,
  },
};

export const getLabelForField = (fieldId) =>
  QCOVID_FIELD_MAPPING[fieldId].display;
