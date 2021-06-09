import { render } from '@testing-library/react';
import FormIntroGenerator from '../../components/FormIntroGenerator';

import { formId as qcovidBodyMassIndexFormId } from '../../constants/forms-metadata/qcovid/body-mass-index';
import { formId as qcovidImunoCancerConditionsFormId } from '../../constants/forms-metadata/qcovid/immunosuppressants-cancer-conditions';

const setup = (formId) => {
  const props = {
    formId,
  };

  return render(<FormIntroGenerator {...props} />);
};

describe('FormIntroGenerator', () => {
  it('should match snapshot for body mass index qcovid form intro type', () => {
    const container = setup(qcovidBodyMassIndexFormId);
    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should match snapshot for immuno cancer conditions qcovid form intro type', () => {
    const container = setup(qcovidImunoCancerConditionsFormId);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
