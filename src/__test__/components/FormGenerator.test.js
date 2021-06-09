import React from 'react';
import { render } from '@testing-library/react';
import FormGenerator from '../../components/FormGenerator';
import { PATIENT_DETAILS_FORM } from '../../constants/forms-metadata/qcovid/patient-details';
import { BODY_MASS_INDEX_FORM } from '../../constants/forms-metadata/qcovid/body-mass-index';
import { CARDIOVASCULAR_DISEASES_FORM } from '../../constants/forms-metadata/qcovid/cardiovascular-diseases';
import { RESP_DISEASES_TREATMENTS_FORM } from '../../constants/forms-metadata/qcovid/respiratory-diseases-and-treatments';
import { METABOLIC_RENAL_FORM } from '../../constants/forms-metadata/qcovid/metabolic-renal-liver-conditions';
import { NEURO_PSYCH_CONDITIONS_FORM } from '../../constants/forms-metadata/qcovid/neurological-and-psychiatric-conditions';
import { IMMU_HAEMA_CONDITIONS_FORM } from '../../constants/forms-metadata/qcovid/immune-and-haematological-conditions';
import { IMMUNO_CANCER_CONDITIONS_FORM } from '../../constants/forms-metadata/qcovid/immunosuppressants-cancer-conditions';
import { ROUTE_QCOVID } from '../../constants/routes';

const setup = (form, prevData, formBaseUrl, pageNames) => {
  const props = {
    form,
    prevData,
    setField: jest.fn(),
    formBaseUrl,
    pageNames,
  };

  return render(<FormGenerator {...props} />);
};

const qcovidPages = [
  PATIENT_DETAILS_FORM,
  BODY_MASS_INDEX_FORM,
  CARDIOVASCULAR_DISEASES_FORM,
  RESP_DISEASES_TREATMENTS_FORM,
  METABOLIC_RENAL_FORM,
  NEURO_PSYCH_CONDITIONS_FORM,
  IMMU_HAEMA_CONDITIONS_FORM,
  IMMUNO_CANCER_CONDITIONS_FORM,
];

describe('FormGenerator', () => {
  it('should identify what to include as hidden form fields', () => {
    const props = {
      form: PATIENT_DETAILS_FORM,
      formId: 'patient-details',
      prevData: {
        csrfToken: 'uuid-12345', // should be hidden
        'answers.height': '168', // should be hidden
        'answers.postcode': 'bs123 4rt', // should not be hidden as it's part of the form
      },
      setField: jest.fn(),
      formBaseUrl: ROUTE_QCOVID,
      pageNames: qcovidPages.map((page) => page.formId),
    };

    const container = render(<FormGenerator {...props} />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});

describe('QCovid FormGenerator', () => {
  test.each(
    qcovidPages.map((formMetadata) => [formMetadata.formId, formMetadata])
  )('should match snapshot for %p', (formId, formMetadata) => {
    const container = setup(
      formMetadata,
      {
        csrfToken: 'uuid-12345',
        'answers.age': '35',
      },
      ROUTE_QCOVID,
      qcovidPages.map((page) => page.formId)
    );
    expect(container.asFragment()).toMatchSnapshot();
  });
});
