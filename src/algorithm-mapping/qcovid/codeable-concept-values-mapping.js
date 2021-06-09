export const SNOMED_CODE_NONE = '260413007';
export const QCOVID_CODE_NONE = 'NONE';

/**
 * This file includes information and util functions needed to convert form fields
 * values for observations of type CODEABLE_CONCEPT
 */

export const VALUE_OBSERVATIONS = {
  // ethnicity
  bangladeshi: { label: 'Bangladeshi', snomedCode: '186003008' },
  chinese: { label: 'Chinese', snomedCode: '33897005' },
  indian: { label: 'Indian', snomedCode: '110751000000108' },
  pakistani: { label: 'Pakistani', snomedCode: '92461000000105' },
  'other-asian': {
    label: 'Another Asian background',
    snomedCode: '92701000000102',
  },
  african: { label: 'African', snomedCode: '92491000000104' },
  caribbean: { label: 'Caribbean', snomedCode: '107691000000105' },
  'other-black': {
    label: 'Another Black background',
    snomedCode: '92501000000105',
  },
  'asian-white': { label: 'Asian and White', snomedCode: '92441000000109' },
  'african-white': {
    label: 'Black African and White',
    snomedCode: '92431000000100',
  },
  'caribbean-white': {
    label: 'Black Caribbean and White',
    snomedCode: '92421000000102',
  },
  'other-mixed': {
    label: 'Another Mixed background',
    snomedCode: '92451000000107',
  },
  british: {
    label: 'British, English, Northern Irish, Scottish, or Welsh',
    snomedCode: '494131000000105',
  },
  irish: { label: 'Irish', snomedCode: '494161000000100' },
  'other-white': {
    label: 'Another White background',
    snomedCode: '92411000000108',
  },
  'other-ethnic-group': {
    label: 'Another ethnic background',
    snomedCode: '94151000000105',
  },
  'not-saying': { label: 'Prefer not to say', snomedCode: '92531000000104' },

  // sex
  female: { label: 'Female', snomedCode: '248152002' },
  male: { label: 'Male', snomedCode: '248153007' },

  // residential
  'not-homeless-or-resident-of-care-home': {
    label: 'Not homeless or resident of a care home',
    snomedCode: '160724009',
  },
  homeless: { label: 'Homeless', snomedCode: '266935003' },
  'resident-of-a-care-home': {
    label: 'Resident of a care home',
    snomedCode: '248171000000108',
  },

  // diabetes
  'has-no-diabetes': { label: 'Has no diabetes', snomedCode: QCOVID_CODE_NONE },
  'has-type-1-diabetes': { label: 'Has type 1', snomedCode: 'TYPE_1_DIABETES' },
  'has-type-2-diabetes': { label: 'Has type 2', snomedCode: 'TYPE_2_DIABETES' },

  // kidney, renal
  'no-cdk-or-has-ckd-1-or-2': {
    label: 'No CKD, or has CKD 1 or 2',
    snomedCode: QCOVID_CODE_NONE,
  },
  'has-cdk3': { label: 'Has CKD3', snomedCode: 'CKD3' },
  'has-cdk4': { label: 'Has CKD4', snomedCode: 'CKD4' },
  'has-cdk5-without-dialysis-or-transplant': {
    label: 'Has CKD5 without dialysis or transplant',
    snomedCode: 'CKD5_NO_DIALYSIS',
  },
  'has-cdk5-with-dialysis-in-the-last-12-months': {
    label: 'Has CKD5 with dialysis in the last 12 months',
    snomedCode: 'CKD5_DIALYSIS',
  },
  'has-cdk5-with-transplant': {
    label: 'Has CKD5 with transplant',
    snomedCode: 'CKD_TRANSPLANT',
  },

  // learning disability
  'has-no-learning-disability-or-downs-syndrome': {
    label: "Has no learning disability or Down's syndrome",
    snomedCode: QCOVID_CODE_NONE,
  },
  'has-learning-disability-excluding-downs-syndrome': {
    label: "Has learning disability excluding Down's syndrome",
    snomedCode: 'LEARNING_DISABILITY',
  },
  'has-downs-syndrome': {
    label: "Has Down's syndrome",
    snomedCode: 'DOWNS_SYNDROME',
  },

  // chemotherapy
  'no-chemotherapy-in-the-last-12-months': {
    label: 'No chemotherapy in the last 12 months',
    snomedCode: QCOVID_CODE_NONE,
  },

  // chemotherapy: group A
  '5fu-single-agent': {
    label: '5FU single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  abiraterone: { label: 'Abiraterone', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  anagrelide: { label: 'Anagrelide', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'aromatase-inhibitors': {
    label: 'Aromatase inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  'bevacizumab-single-agent': {
    label: 'Bevacizumab single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  bisphosphonate: {
    label: 'Bisphosphonate',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  busulfan: { label: 'Busulfan ', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'capecitabine-single-agent': {
    label: 'Capecitabine single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  'cdk4-6-inhibitors': {
    label: 'CDK4/6 inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  cetuximab: { label: 'Cetuximab', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'cisplatin-based-regimens': {
    label: 'Cisplatin based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  denosumab: { label: 'Denosumab ', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  durvalumab: { label: 'Durvalumab', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  enzalutamide: { label: 'Enzalutamide', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  fulvestrant: { label: 'Fulvestrant', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  hydroxycarbamide: {
    label: 'Hydroxycarbamide',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  'interferon-all-formulations': {
    label: 'Interferon (all formulations)',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  ipilimumab: { label: 'Ipilimumab', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  lenvatinib: { label: 'Lenvatinib', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  methotrexate: { label: 'Methotrexate', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'mitomycin-c': { label: 'Mitomycin C', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'mtor-inhibitors': {
    label: 'mTOR inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  nivolumab: {
    label: 'Nivolumab single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  panitumumab: { label: 'Panitumumab', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'parp-inhibitors': {
    label: 'PARP inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  pembrolizumab: {
    label: 'Pembrolizumab single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  pemetrexed: { label: 'Pemetrexed', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  raltitrexed: { label: 'Raltitrexed', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  regorafinib: { label: 'Regorafinib', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'single-agent-atezolizumab': {
    label: 'Atezolizumab single agent',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  sorafenib: { label: 'Sorafenib', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  tamoxifen: { label: 'Tamoxifen', snomedCode: 'SACT_CHEMOTHERAPY_A' },
  'taxane-weekly': {
    label: 'Taxane – weekly',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  'trastuzumab-pertuzumab': {
    label: 'Trastuzumab +/- pertuzumab',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },
  'tyrosine-kinase-inhibitors-including-alk': {
    label: 'Tyrosine kinase inhibitors (including ALK &/or ROS)',
    snomedCode: 'SACT_CHEMOTHERAPY_A',
  },

  // chemotherapy: group B
  abvd: { label: 'ABVD', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'anthracycline-based-regimens': {
    label: 'Anthracycline based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'asparaginase-based-regimens': {
    label: 'Asparaginase based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  beacopp: { label: 'BEACOPP', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  bendamustine: { label: 'Bendamustine', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'brentuximab-vedotin': {
    label: 'Brentuximab vedotin',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'btk-inhibitors': {
    label: 'BTK inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  cabazitaxel: { label: 'Cabazitaxel', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'carboplatin-based-regimens': {
    label: 'Carboplatin based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  chop: { label: 'CHOP', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  chorambucil: { label: 'Chorambucil', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  cladrabine: { label: 'Cladrabine', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  cmf: { label: 'CMF', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  cvad: { label: 'CVAD', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'cyclophosphamide-fludarabine-combinations': {
    label: 'Cyclophosphamide/Fludarabine combinations',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'dacarbazine-based-regimens': {
    label: 'Dacarbazine based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  daratumumab: { label: 'Daratumumab', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  dhap: { label: 'DHAP', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  eshap: { label: 'ESHAP', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'etoposide-based-regimens': {
    label: 'Etoposide based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  fec: { label: 'FEC', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  gdp: { label: 'GDP', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  gemcitabine: { label: 'Gemcitabine', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  ice: { label: 'ICE', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'ifophosphamide-based-regimens': {
    label: 'Ifophosphamide based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  imids: { label: 'IMIDs', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'irinotecan-and-oxaliplatin-based-regimens': {
    label: 'Irinotecan and Oxaliplatin based regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'jak-inhibitors': {
    label: 'JAK inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'liposomal-doxorubicin': {
    label: 'Liposomal doxorubicin',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  lomustine: { label: 'Lomustine', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  mogalizumab: { label: 'Mogalizumab', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  mvac: { label: 'MVAC', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'nab-paclitaxel': {
    label: 'Nab-paclitaxel',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  obinutuzumab: { label: 'Obinutuzumab', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  pentostatin: { label: 'Pentostatin', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'pi3kinase-inhibitors': {
    label: 'PI3Kinase inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  'proteosome-inhibitors': {
    label: 'Proteosome inhibitors',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  rituximab: { label: 'Rituximab', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'taxane-3-weekly': {
    label: 'Taxane – 3 weekly',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  temozolomide: { label: 'Temozolomide', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  topotecan: { label: 'Topotecan', snomedCode: 'SACT_CHEMOTHERAPY_B' },
  'trastuzumab-emtansine': {
    label: 'Trastuzumab-emtansine',
    snomedCode: 'SACT_CHEMOTHERAPY_B',
  },
  ventoclax: { label: 'Ventoclax', snomedCode: 'SACT_CHEMOTHERAPY_B' },

  // chemotherapy: group C
  'all-aml-regimens': {
    label: 'All ALL / AML regimens',
    snomedCode: 'SACT_CHEMOTHERAPY_C',
  },
  bep: { label: 'BEP', snomedCode: 'SACT_CHEMOTHERAPY_C' },
  'highly-immunosuppressive-chemotherapy': {
    label:
      'Highly immunosuppressive chemotherapy (e.g. FluDAP, high dose Methotrexate & Cytarabine)',
    snomedCode: 'SACT_CHEMOTHERAPY_C',
  },
  'trifuradine-tipracil': {
    label: 'Trifuradine/Tipracil',
    snomedCode: 'SACT_CHEMOTHERAPY_C',
  },
};

export const getSnomedCodeForValue = (valueId) =>
  VALUE_OBSERVATIONS[valueId].snomedCode;

export const getLabelForSnomedCode = (snomedCode) => {
  if (snomedCode === SNOMED_CODE_NONE || snomedCode === QCOVID_CODE_NONE) {
    return 'None';
  }

  if (snomedCode === 'SACT_CHEMOTHERAPY_A') {
    return 'Chemotherapy systemic anti cancer therapy (SACT) protocol A';
  }

  if (snomedCode === 'SACT_CHEMOTHERAPY_B') {
    return 'Chemotherapy systemic anti cancer therapy (SACT) protocol B';
  }

  if (snomedCode === 'SACT_CHEMOTHERAPY_C') {
    return 'Chemotherapy systemic anti cancer therapy (SACT) protocol C';
  }

  try {
    const { label } = Object.values(VALUE_OBSERVATIONS).find(
      (value) => value.snomedCode === snomedCode
    );
    return label;
  } catch (e) {
    throw new Error(`cannot find label for: ${snomedCode} : ${e.message}`);
  }
};

const getLabelForValue = (valueId) => VALUE_OBSERVATIONS[valueId].label;

export const getObservationOption = (name) => ({
  label: getLabelForValue(name),
  name,
});
