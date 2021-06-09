import handleServerSideRedirect from '../../utils/handleServerSideRedirect';
import { getUrl } from '../../utils/configCacheHandler';

jest.mock('../../utils/configCacheHandler');

describe('handleServerSideRedirect', () => {
  it('should return redirect with a valid url link ', async () => {
    getUrl.mockImplementation(async () => 'testlink');

    const result = await handleServerSideRedirect('linkName')();

    expect(result).toEqual({
      redirect: { destination: 'testlink', permanent: false },
    });
  });

  it('should return message without redirect with a missing url link ', async () => {
    getUrl.mockImplementation(async () => null);

    const result = await handleServerSideRedirect('linkName')();

    expect(result).toEqual({ props: { statusCode: 503 } });
  });
});
