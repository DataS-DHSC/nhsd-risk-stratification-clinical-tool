import axios from 'axios';
import riskAssessment from '../../utils/riskAssessment';

jest.mock('axios');

describe('riskAssessment', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should return null if formData object is empty', async () => {
    const formData = {};

    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error('404 Error'))
    );

    const output = await riskAssessment(formData);

    expect(output).toBeNull();
  });

  it('Should catch error and return null', async () => {
    const formData = {
      'answers.age': 21,
    };

    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error('404 Error'))
    );

    const output = await riskAssessment(formData);

    expect(output).toBeNull();
  });

  it('Should return null when response isAxiosError', async () => {
    const formData = {
      'answers.age': 21,
    };

    axios.post.mockImplementationOnce(() => ({
      isAxiosError: true,
      issue: [
        {
          diagnostics: 'Required value missing',
        },
      ],
    }));

    const output = await riskAssessment(formData);

    expect(output).toBeNull();
  });

  it('Returns the correct response', async () => {
    const formData = {
      'answers.page-one.age': 85,
      'answers.page-two.weight': 70,
    };

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          resourceType: 'RiskAssessment',
          meta: {
            versionId:
              'NHSD.RiskStratification.Calculator, Version=0.1.0.0, Culture=neutral, PublicKeyToken=null',
          },
          contained: [
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
                value: 85,
                unit: 'years',
                system: 'http://unitsofmeasure.org',
                code: 'years',
              },
            },
            {
              resourceType: 'Observation',
              id: 'sex',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '734000001',
                    display: 'Sex',
                  },
                ],
              },
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '248152002',
                  },
                ],
              },
            },
          ],
          status: 'final',
          subject: {
            reference: '#',
          },
          basis: [
            {
              reference: '#age',
            },
            {
              reference: '#sex',
            },
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
              probabilityDecimal: 0.0002,
              relativeRisk: 1.02,
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
              probabilityDecimal: 0.0078,
              relativeRisk: 0.96,
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
              probabilityDecimal: 0.0002,
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
              probabilityDecimal: 0.0081,
              relativeRisk: 1,
            },
          ],
        },
      })
    );

    const output = await riskAssessment(formData);

    expect(output).toEqual({
      basis: {
        Age: 85,
        Sex: 'Female',
      },
      death: {
        baseline: 0.0002,
        probability: 0.0002,
        relativeRisk: 1.02,
      },
      hospitalisation: {
        baseline: 0.0081,
        probability: 0.0078,
        relativeRisk: 0.96,
      },
      warnings: [],
    });
  });

  it('Warns of unused parameters in the request', async () => {
    const formData = {
      'answers.page-one.age': 85,
      'answers.page-two.weight': 70,
    };

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          resourceType: 'RiskAssessment',
          meta: {
            versionId:
              'NHSD.RiskStratification.Calculator, Version=0.1.0.0, Culture=neutral, PublicKeyToken=null',
          },
          contained: [
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
                value: 85,
                unit: 'years',
                system: 'http://unitsofmeasure.org',
                code: 'years',
              },
            },
          ],
          status: 'final',
          subject: {
            reference: '#',
          },
          basis: [
            {
              reference: '#age',
            },
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
              probabilityDecimal: 0.0002,
              relativeRisk: 1.02,
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
              probabilityDecimal: 0.0078,
              relativeRisk: 0.96,
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
              probabilityDecimal: 0.0002,
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
              probabilityDecimal: 0.0081,
              relativeRisk: 1,
            },
          ],
        },
      })
    );

    const output = await riskAssessment(formData);

    expect(output).toEqual({
      basis: {
        Age: 85,
      },
      death: {
        baseline: 0.0002,
        probability: 0.0002,
        relativeRisk: 1.02,
      },
      hospitalisation: {
        baseline: 0.0081,
        probability: 0.0078,
        relativeRisk: 0.96,
      },
      warnings: [
        {
          coding: {
            code: '27113001',
            display: 'Weight in kg',
            system: 'http://snomed.info/sct',
          },
          message: 'Weight in kg',
          severity: 'warning',
        },
      ],
    });
  });

  it('Returns any warnings present from the calculator', async () => {
    const formData = {
      'answers.page-one.age': 85,
      'answers.page-two.weight': 70,
    };

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          resourceType: 'RiskAssessment',
          meta: {
            versionId:
              'NHSD.RiskStratification.Calculator, Version=0.1.0.0, Culture=neutral, PublicKeyToken=null',
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
                value: 85,
                unit: 'years',
                system: 'http://unitsofmeasure.org',
                code: 'years',
              },
            },
            {
              resourceType: 'Observation',
              id: 'sex',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '734000001',
                    display: 'Sex',
                  },
                ],
              },
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '248152002',
                  },
                ],
              },
            },
          ],
          status: 'final',
          subject: {
            reference: '#',
          },
          basis: [
            {
              reference: '#age',
            },
            {
              reference: '#sex',
            },
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
              probabilityDecimal: 0.0002,
              relativeRisk: 1.02,
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
              probabilityDecimal: 0.0078,
              relativeRisk: 0.96,
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
              probabilityDecimal: 0.0002,
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
              probabilityDecimal: 0.0081,
              relativeRisk: 1,
            },
          ],
        },
      })
    );

    const output = await riskAssessment(formData);

    expect(output).toEqual({
      basis: {
        Age: 85,
        Sex: 'Female',
      },
      death: {
        baseline: 0.0002,
        probability: 0.0002,
        relativeRisk: 1.02,
      },
      hospitalisation: {
        baseline: 0.0081,
        probability: 0.0078,
        relativeRisk: 0.96,
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

  it('Handled empty warnings response from server', async () => {
    const formData = {
      'answers.page-one.age': 85,
      'answers.page-two.weight': 70,
    };

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          resourceType: 'RiskAssessment',
          meta: {
            versionId:
              'NHSD.RiskStratification.Calculator, Version=0.1.0.0, Culture=neutral, PublicKeyToken=null',
          },
          contained: [
            {
              resourceType: 'SomethingWhichShouldBeIgnored',
            },
            {
              resourceType: 'OperationOutcome',
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
                value: 85,
                unit: 'years',
                system: 'http://unitsofmeasure.org',
                code: 'years',
              },
            },
            {
              resourceType: 'Observation',
              id: 'sex',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '734000001',
                    display: 'Sex',
                  },
                ],
              },
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '248152002',
                  },
                ],
              },
            },
          ],
          status: 'final',
          subject: {
            reference: '#',
          },
          basis: [
            {
              reference: '#age',
            },
            {
              reference: '#sex',
            },
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
              probabilityDecimal: 0.0002,
              relativeRisk: 1.02,
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
              probabilityDecimal: 0.0078,
              relativeRisk: 0.96,
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
              probabilityDecimal: 0.0002,
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
              probabilityDecimal: 0.0081,
              relativeRisk: 1,
            },
          ],
        },
      })
    );

    const output = await riskAssessment(formData);

    expect(output).toEqual({
      basis: {
        Age: 85,
        Sex: 'Female',
      },
      death: {
        baseline: 0.0002,
        probability: 0.0002,
        relativeRisk: 1.02,
      },
      hospitalisation: {
        baseline: 0.0081,
        probability: 0.0078,
        relativeRisk: 0.96,
      },
      warnings: [],
    });
  });

  it('fails when basis entries are not equal to observation count', async () => {
    const formData = {
      'answers.page-one.age': 85,
      'answers.page-two.weight': 70,
    };
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          basis: [
            {
              reference: '#age',
            },
          ],
        },
      })
    );

    const output = await riskAssessment(formData);

    expect(output).toBeNull();
  });
});
