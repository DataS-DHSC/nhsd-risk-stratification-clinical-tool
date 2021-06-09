import calcBmi from 'bmi-calc';
import {
  getLabelForSnomedCode,
  QCOVID_CODE_NONE,
  SNOMED_CODE_NONE,
} from '../algorithm-mapping/qcovid/codeable-concept-values-mapping';
import { log } from './logger';

const postcodeSnomedCode = '184102003';

const extractAssessmentBasis = (responseJson) => {
  const responseBasis = responseJson.basis;
  let height;
  let weight;
  const basisEntries = responseBasis
    .filter((entry) => {
      const ref = entry.reference.replace('#', '');
      const containedObs = responseJson.contained.find(
        (contained) => contained.id === ref
      );
      const observationKeys = Object.keys(containedObs);
      if (
        observationKeys.includes('valueQuantity') ||
        observationKeys.includes('valueString')
      ) {
        return true;
      }

      if (observationKeys.includes('valueBoolean')) {
        return containedObs.valueBoolean;
      }

      if (observationKeys.includes('valueCodeableConcept')) {
        const valueSnomedCode =
          containedObs.valueCodeableConcept.coding[0].code;
        return !(
          valueSnomedCode === SNOMED_CODE_NONE ||
          valueSnomedCode === QCOVID_CODE_NONE
        );
      }

      return false;
    })
    .map((b) => {
      const ref = b.reference.replace('#', '');
      const containedObs = responseJson.contained.find((c) => c.id === ref);
      const { system, code, display } = containedObs.code.coding[0];
      let value = null;

      if (containedObs.valueQuantity) {
        value = containedObs.valueQuantity.value;

        if (system === 'http://snomed.info/sct') {
          if (code === '50373000') {
            height = value;
          }
          if (code === '27113001') {
            weight = value;
          }
        }
      } else if ('valueString' in containedObs) {
        // make sure not to display the postcode
        value =
          containedObs.code.coding[0].code === postcodeSnomedCode
            ? 'Has caused an increase in risk'
            : containedObs.valueString;
      } else if (containedObs.valueCodeableConcept) {
        const valueSnomedCode =
          containedObs.valueCodeableConcept.coding[0].code;
        value = getLabelForSnomedCode(valueSnomedCode);
      }

      return [display, value];
    });

  if (height && weight) {
    const bmi = calcBmi(weight, height / 100, false);
    if (bmi.value) {
      basisEntries.push(['Body mass index (BMI)', bmi.value.toFixed(1)]);
    }
  }

  // eslint-disable-next-line no-restricted-properties
  return Object.fromEntries(basisEntries);
};

/**
 * Extract any server side warnings for display.
 * @param responseJson The server response.
 */
const extractCalculationWarnings = (responseJson) =>
  responseJson.contained.reduce((acc, e) => {
    if (e.resourceType && e.resourceType === 'OperationOutcome') {
      (e.issue || []).forEach((issue) =>
        acc.push({
          severity: issue.severity,
          message: (issue.details || {}).text,
          coding: ((issue.details || {}).coding || [])[0],
        })
      );
    }
    return acc;
  }, []);

/**
 * Ascertain whether additional data has been used by the algorithm, or user input has been
 * ignored. These will be used to display a warning to the clinician.
 *
 * @param responseJson The JSON data from the calculation engine
 * @param observationBundle The bundle of observations which were collected from the user
 */
const extractParameterSetDifferences = (responseJson, observationBundle) => {
  if (
    responseJson.basis &&
    observationBundle.entry &&
    observationBundle.entry.length !== responseJson.basis.length
  ) {
    const submittedIds = new Set(
      observationBundle.entry.map((e) => e.resource.id)
    );
    const usedIds = new Set((responseJson.contained || []).map((e) => e.id));

    const unusedParameters = [...submittedIds]
      .filter((id) => id && !usedIds.has(id))
      .filter((id) => id !== 'postcode');

    // Find the entries which were not used.
    return unusedParameters.reduce((acc, id) => {
      const observation = observationBundle.entry.find(
        (p) => p.resource.id === id
      );
      const { resource } = observation;
      if (resource) {
        const { coding } = resource.code;

        acc.push({
          severity: 'warning',
          message: `${coding[0].display}`,
          coding: coding[0],
        });
      } else {
        log.error('Unknown parameter', observation);
      }
      return acc;
    }, []);
  }
  return [];
};

const extractRiskAssessment = (responseJson, observationBundle) => {
  const responsePredictions = responseJson.prediction;
  if (responsePredictions && responsePredictions.length > 0) {
    const hasCode = (code) => (prediction) =>
      prediction.outcome.coding[0].code === code;
    const deathPrediction = responsePredictions.find(hasCode('419620001'));
    const hospitalisationPrediction = responsePredictions.find(
      hasCode('Hospitalisation')
    );
    const baseLineDeathPrediction = responsePredictions.find(
      hasCode('BaselineDeath')
    );
    const baselineHospitalisationPrediction = responsePredictions.find(
      hasCode('BaselineHospitalisation')
    );

    const warnings = [
      ...extractParameterSetDifferences(responseJson, observationBundle),
      ...extractCalculationWarnings(responseJson),
    ];

    const assessment = {
      warnings,
      death: {
        probability: deathPrediction.probabilityDecimal,
        baseline: baseLineDeathPrediction.probabilityDecimal,
        relativeRisk: deathPrediction.relativeRisk,
      },
      hospitalisation: {
        probability: hospitalisationPrediction.probabilityDecimal,
        baseline: baselineHospitalisationPrediction.probabilityDecimal,
        relativeRisk: hospitalisationPrediction.relativeRisk,
      },
    };

    assessment.basis = extractAssessmentBasis(responseJson);

    return assessment;
  }

  throw new Error(
    `Unable to find RiskAssessment predictions in response: ${JSON.stringify(
      responseJson
    )}`
  );
};

export default extractRiskAssessment;
