import axios from 'axios';
import generateObservationBundle from './generateObservationBundle';
import extractRiskAssessment from './extractRiskAssessment';
import { log } from './logger';

/**
 * Extract list of issues from an error response from the calcengine
 */
function extractIssues(data) {
  return (
    data &&
    data.issue &&
    data.issue.length > 0 &&
    data.issue.map((i) => i.diagnostics).join('\n')
  );
}

const riskAssessment = async (formData, csrfToken, correlationId) => {
  console.log(`correlation ID: ${correlationId}`);

  if (
    formData &&
    Object.entries(formData) &&
    Object.entries(formData).length > 0
  ) {
    const observationBundle = generateObservationBundle(formData);

    const qcovidEndpoint = `${process.env.API_ENDPOINT}/api/qcovid`;

    log.info(`sending POST request to QCOVID endpoint: ${qcovidEndpoint}`);

    try {
      const response = await axios.post(qcovidEndpoint, observationBundle, {
        headers: {
          'Content-Type': 'application/fhir+json',
          'x-correlation-id': correlationId,
          'x-csrf-token': csrfToken,
          'x-api-key': process.env.CALCENGINE_API_GATEWAY_KEY || '',
        },
      });

      return extractRiskAssessment(response.data, observationBundle);
    } catch (e) {
      const data = e.response && e.response.data;
      log.error({
        description: `ERROR: RiskAssessment failed: ${e.message}`,
        version: data && data.resourceType,
        config: e.config,
        issues: extractIssues(data),
      });
    }
  }

  return null;
};

export default riskAssessment;
