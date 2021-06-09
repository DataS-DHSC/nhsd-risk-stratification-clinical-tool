import { QCOVID_FIELD_MAPPING } from '../algorithm-mapping/qcovid/fields-mapping';
import { SNOMED_CODING_SYSTEM } from '../algorithm-mapping/observationValueGenerators';
import { log } from './logger';
import { stripNamespace } from './namespacingTools';

const generateBundle = (observations) => ({
  resourceType: 'Bundle',
  type: 'transaction',
  entry: observations.map((obs) => ({ resource: obs })),
});

const generateObservation = (name, value) => {
  if (!Object.hasOwnProperty.call(QCOVID_FIELD_MAPPING, name)) {
    log.error(`Unable to find coding QCOVID_FIELD_MAPPING for ${name}`);
  }

  const {
    snomedCode,
    observationValueGenerator,
    system,
    display,
  } = QCOVID_FIELD_MAPPING[name.toString()];

  return {
    resourceType: 'Observation',
    id: name,
    code: {
      coding: [
        {
          system: system || SNOMED_CODING_SYSTEM,
          code: snomedCode,
          display,
        },
      ],
    },
    ...observationValueGenerator(value, system || SNOMED_CODING_SYSTEM),
  };
};

const generateObservationBundle = (observationState) => {
  const observationList = Object.entries(observationState)
    .filter(([key]) => key.startsWith('answers'))
    .filter(([, value]) => value) // get rid of falsey values
    .map(([name, value]) => generateObservation(stripNamespace(name), value));

  return generateBundle(observationList);
};

export default generateObservationBundle;
