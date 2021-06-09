import extractRiskAssessment from '../../utils/extractRiskAssessment';

const baseLineDeath = 0.0002;
const baseLineHosp = 0.0081;

const buildSampleResponse = (deathProbability, hopsProbability) => {
  const sampleResponse = {
    resourceType: 'RiskAssessment',
    meta: {
      versionId: 'QCovidRiskCalculator 0.0.4.0',
    },
    contained: [
      {
        resourceType: 'SomethingWhichShouldBeIgnored',
      },
      {
        resourceType: 'OperationOutcome',
        issue: [
          {
            severity: 'warning',
            code: 'processing',
            details: {
              coding: [
                {
                  system: 'http://qcovid.org',
                  code: '206',
                },
              ],
              text: 'No BMI was provided. A BMI of 25 will be used.',
            },
          },
          {
            severity: 'warning',
            code: 'processing',
            details: {
              coding: [
                {
                  system: 'http://qcovid.org',
                  code: '301',
                },
              ],
              text:
                'No postcode was provided. A Townsend score of 0 will be used.',
            },
          },
        ],
      },
      {
        resourceType: 'Observation',
        id: 'age',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '424144002',
              display: 'Age',
            },
          ],
        },
        valueQuantity: {
          value: 60,
          unit: 'years',
          system: 'http://unitsofmeasure.org',
          code: 'years',
        },
      },
      {
        resourceType: 'Observation',
        id: 'ethnic-group',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '364699009',
              display: 'Ethnicity',
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '494161000000100', // irish
            },
          ],
        },
      },
      {
        resourceType: 'Observation',
        id: 'postcode',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '184102003',
              display: 'Postcode',
            },
          ],
        },
        valueString: 'BS1 5AH',
      },
      {
        resourceType: 'Observation',
        id: 'diabetes-type',
        code: {
          coding: [
            {
              system: 'http://nhsd.riskstrat.nhs/qcovid',
              code: 'DIABETES_TYPE',
              display: 'Diabetes type',
            },
          ],
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://nhsd.riskstrat.nhs/qcovid',
              code: 'TYPE_1_DIABETES',
            },
          ],
        },
      },
      {
        resourceType: 'Observation',
        id: 'bone-marrow-or-stem-cell-transplant',
        code: {
          coding: [
            {
              system: 'http://nhsd.riskstrat.nhs/qcovid',
              code: 'BONE_MARROW_TRANSPLANT',
              display:
                'Has had bone marrow or stem cell transplant in the last 6 months',
            },
          ],
        },
        valueBoolean: true,
      },
      {
        resourceType: 'Observation',
        id: 'bone-marrow-or-stem-cell-transplant',
        code: {
          coding: [
            {
              system: 'http://nhsd.riskstrat.nhs/qcovid',
              code: 'LEARNING_DISABILITY',
              display: "Has learning disability excluding Down's syndrome",
            },
          ],
        },
        valueBoolean: false,
      },
    ],
    status: 'final',
    subject: {
      reference: '#',
    },
    basis: [
      { reference: '#age' },
      { reference: '#ethnic-group' },
      { reference: '#diabetes-type' },
      { reference: '#bone-marrow-or-stem-cell-transplant' },
    ],
    prediction: [
      {
        outcome: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '419620001',
              display: 'Death (event)',
            },
          ],
          text: 'Death attributed to COVID-19',
        },
        probabilityDecimal: deathProbability,
        relativeRisk: deathProbability / baseLineDeath,
      },
      {
        outcome: {
          coding: [
            {
              system: 'http://nhsd.nhs.uk/riskassessment',
              code: 'Hospitalisation',
              display: 'Hospitalisation',
            },
          ],
          text: 'COVID-19',
        },
        probabilityDecimal: hopsProbability,
        relativeRisk: hopsProbability / baseLineHosp,
      },
      {
        outcome: {
          coding: [
            {
              system: 'http://nhsd.nhs.uk/riskassessment',
              code: 'BaselineDeath',
              display: 'Baseline death for age and sex',
            },
          ],
        },
        probabilityDecimal: baseLineDeath,
        relativeRisk: 1,
      },
      {
        outcome: {
          coding: [
            {
              system: 'http://nhsd.nhs.uk/riskassessment',
              code: 'BaselineHospitalisation',
              display: 'Baseline hospitalisation for age and sex',
            },
          ],
        },
        probabilityDecimal: baseLineHosp,
        relativeRisk: 1,
      },
    ],
  };

  return sampleResponse;
};

describe('extractRiskAssessment', () => {
  it('throws error', async () => {
    expect(() => extractRiskAssessment({})).toThrow(
      'Unable to find RiskAssessment predictions in response'
    );
  });
  it('extracts risk when postcode is in basis', async () => {
    const deathProbability = 0.6;
    const hospProbability = 0.3;
    const sampleResponse = buildSampleResponse(
      deathProbability,
      hospProbability
    );
    sampleResponse.basis.push({ reference: '#postcode' });

    expect(extractRiskAssessment(sampleResponse, {})).toEqual({
      death: {
        probability: deathProbability,
        baseline: baseLineDeath,
        relativeRisk: deathProbability / baseLineDeath,
      },
      hospitalisation: {
        probability: hospProbability,
        baseline: baseLineHosp,
        relativeRisk: hospProbability / baseLineHosp,
      },
      basis: {
        Age: 60,
        'Diabetes type': 'Has type 1',
        Ethnicity: 'Irish',
        'Has had bone marrow or stem cell transplant in the last 6 months': null,
        Postcode: 'Has caused an increase in risk',
      },
      warnings: [
        {
          coding: {
            code: '206',
            system: 'http://qcovid.org',
          },
          message: 'No BMI was provided. A BMI of 25 will be used.',
          severity: 'warning',
        },
        {
          coding: {
            code: '301',
            system: 'http://qcovid.org',
          },
          message:
            'No postcode was provided. A Townsend score of 0 will be used.',
          severity: 'warning',
        },
      ],
    });
  });

  it('extracts risk when postcode is not in basis', async () => {
    const deathProbability = 0.6;
    const hospProbability = 0.3;
    const sampleResponse = buildSampleResponse(
      deathProbability,
      hospProbability
    );

    expect(extractRiskAssessment(sampleResponse, {})).toEqual({
      death: {
        probability: deathProbability,
        baseline: baseLineDeath,
        relativeRisk: deathProbability / baseLineDeath,
      },
      hospitalisation: {
        probability: hospProbability,
        baseline: baseLineHosp,
        relativeRisk: hospProbability / baseLineHosp,
      },
      basis: {
        Age: 60,
        'Diabetes type': 'Has type 1',
        Ethnicity: 'Irish',
        'Has had bone marrow or stem cell transplant in the last 6 months': null,
      },
      warnings: [
        {
          coding: {
            code: '206',
            system: 'http://qcovid.org',
          },
          message: 'No BMI was provided. A BMI of 25 will be used.',
          severity: 'warning',
        },
        {
          coding: {
            code: '301',
            system: 'http://qcovid.org',
          },
          message:
            'No postcode was provided. A Townsend score of 0 will be used.',
          severity: 'warning',
        },
      ],
    });
  });
});
