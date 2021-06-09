import generateObservationBundle from '../../utils/generateObservationBundle';

describe('generateRequest', () => {
  it('throws error', async () => {
    expect(generateObservationBundle({})).toEqual({
      entry: [],
      resourceType: 'Bundle',
      type: 'transaction',
    });
  });

  it('returns response', async () => {
    expect(
      generateObservationBundle({
        'answers.page-one.age': 23,
        'answers.page-one.weight': 123,
        'answers.page-one.sex': 'male',
        'answers.page-one.ethnic-group': 'african',
        'answers.page-one.postcode': 'abc123',
        'answers.page-two.tia': 'false',
      })
    ).toEqual({
      entry: [
        {
          resource: {
            code: {
              coding: [
                {
                  code: '424144002',
                  system: 'http://snomed.info/sct',
                  display: 'Age (19-100)',
                },
              ],
            },
            id: 'age',
            resourceType: 'Observation',
            valueQuantity: {
              code: 'years',
              system: 'http://unitsofmeasure.org',
              unit: 'years',
              value: 23,
            },
          },
        },
        {
          resource: {
            code: {
              coding: [
                {
                  code: '27113001',
                  system: 'http://snomed.info/sct',
                  display: 'Weight in kg',
                },
              ],
            },
            id: 'weight',
            resourceType: 'Observation',
            valueQuantity: {
              code: 'kg',
              system: 'http://unitsofmeasure.org',
              unit: 'kg',
              value: 123,
            },
          },
        },
        {
          resource: {
            code: {
              coding: [
                {
                  code: '734000001',
                  system: 'http://snomed.info/sct',
                  display: 'Sex registered at birth',
                },
              ],
            },
            id: 'sex',
            resourceType: 'Observation',
            valueCodeableConcept: {
              coding: [
                {
                  code: '248153007',
                  system: 'http://snomed.info/sct',
                },
              ],
            },
          },
        },
        {
          resource: {
            code: {
              coding: [
                {
                  code: '364699009',
                  system: 'http://snomed.info/sct',
                  display: 'Ethnicity',
                },
              ],
            },
            id: 'ethnic-group',
            resourceType: 'Observation',
            valueCodeableConcept: {
              coding: [
                {
                  code: '92491000000104',
                  system: 'http://snomed.info/sct',
                },
              ],
            },
          },
        },
        {
          resource: {
            code: {
              coding: [
                {
                  code: '184102003',
                  system: 'http://snomed.info/sct',
                  display: 'Postcode',
                },
              ],
            },
            id: 'postcode',
            resourceType: 'Observation',
            valueString: 'abc123',
          },
        },
        {
          resource: {
            code: {
              coding: [
                {
                  code: 'STROKE_TIA',
                  display: 'Has had a stroke or TIA',
                  system: 'http://nhsd.riskstrat.nhs/qcovid',
                },
              ],
            },
            id: 'tia',
            resourceType: 'Observation',
            valueBoolean: false,
          },
        },
      ],
      resourceType: 'Bundle',
      type: 'transaction',
    });
  });
});
