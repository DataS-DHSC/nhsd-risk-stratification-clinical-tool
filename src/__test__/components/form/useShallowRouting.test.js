import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { useRouter } from 'next/router';
import useShallowRouting from '../../../components/form/useShallowRouting';

jest.mock('next/router');

describe('useShallowRouting', () => {
  it('onClick handler should invoke nextjs router with correct arguments', () => {
    const router = { push: jest.fn() };
    useRouter.mockImplementationOnce(() => router);

    const onClickFn = useShallowRouting('baseurl', 'url2');
    const MyButton = (props) => (
      <button type="submit" {...props} onClick={onClickFn} />
    );
    render(<MyButton>Click Me</MyButton>);
    fireEvent.click(screen.getByText(/click me/i));

    expect(router.push).toHaveBeenCalledWith(
      { pathname: 'baseurl/url2' },
      undefined,
      { shallow: true }
    );
  });
});
