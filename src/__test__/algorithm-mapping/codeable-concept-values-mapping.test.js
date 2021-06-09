import {
  getObservationOption,
  getLabelForSnomedCode,
  QCOVID_CODE_NONE,
  SNOMED_CODE_NONE,
} from '../../algorithm-mapping/qcovid/codeable-concept-values-mapping';

describe('getObservationOption', () => {
  it('returns option with id and label', () => {
    expect(getObservationOption('abvd')).toEqual({
      label: 'ABVD',
      name: 'abvd',
    });
  });
});

describe('getLabelForSnomedCode', () => {
  it('returns label for QCOVID_CODE_NONE', () => {
    expect(getLabelForSnomedCode(QCOVID_CODE_NONE)).toEqual('None');
  });

  it('returns label for SNOMED_CODE_NONE', () => {
    expect(getLabelForSnomedCode(SNOMED_CODE_NONE)).toEqual('None');
  });

  it('returns label for SACT_CHEMOTHERAPY_A', () => {
    expect(getLabelForSnomedCode('SACT_CHEMOTHERAPY_A')).toEqual(
      'Chemotherapy systemic anti cancer therapy (SACT) protocol A'
    );
  });

  it('returns label for SACT_CHEMOTHERAPY_B', () => {
    expect(getLabelForSnomedCode('SACT_CHEMOTHERAPY_B')).toEqual(
      'Chemotherapy systemic anti cancer therapy (SACT) protocol B'
    );
  });

  it('returns label for SACT_CHEMOTHERAPY_C', () => {
    expect(getLabelForSnomedCode('SACT_CHEMOTHERAPY_C')).toEqual(
      'Chemotherapy systemic anti cancer therapy (SACT) protocol C'
    );
  });

  it('returns label for mapped value', () => {
    expect(getLabelForSnomedCode('186003008')).toEqual('Bangladeshi');
  });
});
