import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import Start from '../../../components/qcovid/Start';
import { useQCovidContext } from '../../../context/qcovid/qcovid-context';

jest.mock('next/router');
jest.mock('../../../context/qcovid/qcovid-context');

describe('Start QCovid', () => {
  beforeEach(jest.resetAllMocks);

  it('should match snapshot', () => {
    useQCovidContext.mockImplementationOnce(() => [null, null, null]);

    const props = {
      prevData: {
        field1: 'field1',
        field2: 'field2',
      },
      route: 'exampleRoute',
      id: 'start-form',
    };

    const container = render(<Start {...props} />);

    expect(container.asFragment()).toMatchSnapshot();
  });

  it('should reset context on start', () => {
    const resetContext = jest.fn();
    useQCovidContext.mockImplementationOnce(() => [null, null, resetContext]);

    const router = { push: jest.fn() };
    useRouter.mockImplementationOnce(() => router);

    const props = {
      prevData: {},
      route: 'exampleRoute',
      id: 'start-form',
    };

    const { getByRole } = render(<Start {...props} />);

    userEvent.click(getByRole('button'));

    expect(resetContext).toHaveBeenCalled();
    expect(router.push).toHaveBeenCalledWith(props.route);
  });
});
