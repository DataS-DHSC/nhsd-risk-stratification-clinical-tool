const { Readable } = require('stream');
const { getS3Object, s3 } = require('../../../utils/aws/getObjectS3');

describe('getS3Object', () => {
  afterEach(jest.resetAllMocks);

  it('Should throw an error if invalid key', async () => {
    s3.send = jest.fn().mockImplementationOnce(() => {
      throw new Error('No file found');
    });

    await expect(
      getS3Object({
        Bucket: 'bucket-name',
        Key: 'config.test.json',
      })
    ).rejects.toThrowError(
      "Could not retrieve from bucket 'bucket-name' file 'config.test.json' from S3: No file found"
    );
  });

  it('Should return config', async () => {
    const result = JSON.stringify({
      featureFlags: {
        testFlag: true,
      },
    });

    s3.send = jest.fn().mockReturnValueOnce({ Body: Readable.from([result]) });

    const data = await getS3Object({
      Bucket: 'bucket-name',
      Key: 'config.test.json',
    });

    expect(data).toEqual(result);
  });
});
