import { getAWSAccountId, sts } from '../../../utils/aws/getAWSAccountId';

describe('getAWSAccountId', () => {
  afterEach(jest.clearAllMocks);

  it('returns the account id', async () => {
    // mock
    sts.send = jest.fn().mockReturnValueOnce({ Account: 123456789 });

    const accountId = await getAWSAccountId();

    expect(accountId).toEqual(123456789);
  });
});
