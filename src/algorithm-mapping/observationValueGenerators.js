import isCheckboxChecked from '../utils/isCheckboxChecked';
import { getSnomedCodeForValue as getSnomedCodeForValueQCovid } from './qcovid/codeable-concept-values-mapping';

export const SNOMED_CODING_SYSTEM = 'http://snomed.info/sct';
export const QCOVID_CODING_SYSTEM = 'http://nhsd.riskstrat.nhs/qcovid';
export const UNIT_OF_MEASURE_SYSTEM = 'http://unitsofmeasure.org';

export const observationQuantityValue = (value, unit) => ({
  valueQuantity: {
    value: Number(value),
    unit,
    code: unit,
    system: UNIT_OF_MEASURE_SYSTEM,
  },
});

export const observationString = (valueString) => ({
  valueString,
});

export const observationBoolean = (value) => ({
  valueBoolean: isCheckboxChecked(value),
});

export const observationCodeableConceptQCOVID = (value, system) => ({
  valueCodeableConcept: {
    coding: [
      {
        system,
        code: getSnomedCodeForValueQCovid(value),
      },
    ],
  },
});
