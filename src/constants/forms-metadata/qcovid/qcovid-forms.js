import { IMMU_HAEMA_CONDITIONS_FORM } from './immune-and-haematological-conditions';
import { BODY_MASS_INDEX_FORM } from './body-mass-index';
import { CARDIOVASCULAR_DISEASES_FORM } from './cardiovascular-diseases';
import { IMMUNO_CANCER_CONDITIONS_FORM } from './immunosuppressants-cancer-conditions';
import { METABOLIC_RENAL_FORM } from './metabolic-renal-liver-conditions';
import { NEURO_PSYCH_CONDITIONS_FORM } from './neurological-and-psychiatric-conditions';
import { PATIENT_DETAILS_FORM } from './patient-details';
import { RESP_DISEASES_TREATMENTS_FORM } from './respiratory-diseases-and-treatments';
import { extractDefaults } from '../../../utils/extractDefaults';
import { fromEntries } from '../../../utils/fromEntries';

export const QCOVID_PAGES = [
  PATIENT_DETAILS_FORM,
  BODY_MASS_INDEX_FORM,
  CARDIOVASCULAR_DISEASES_FORM,
  RESP_DISEASES_TREATMENTS_FORM,
  METABOLIC_RENAL_FORM,
  NEURO_PSYCH_CONDITIONS_FORM,
  IMMU_HAEMA_CONDITIONS_FORM,
  IMMUNO_CANCER_CONDITIONS_FORM,
];

export const QCOVID_FORMS = fromEntries(
  QCOVID_PAGES.map((form) => [form.formId, form])
);

export const QCOVID_PAGE_NAMES = QCOVID_PAGES.map((form) => form.formId);

export const QCOVID_DEFAULTS = extractDefaults(QCOVID_FORMS);
