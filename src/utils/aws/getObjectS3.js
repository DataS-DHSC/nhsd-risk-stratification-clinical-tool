import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import awsInitParams from './credentialsProvider';

const s3 = new S3Client(awsInitParams());

const getS3Object = async ({ Bucket, Key }) => {
  try {
    const params = {
      Bucket,
      Key,
    };

    const { Body } = await s3.send(new GetObjectCommand(params));

    const content = await new Promise((resolve, reject) => {
      const chunks = [];
      Body.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      Body.on('error', (err) => reject(err));
      Body.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });

    return content;
  } catch (e) {
    throw new Error(
      `Could not retrieve from bucket '${Bucket}' file '${Key}' from S3: ${e.message}`
    );
  }
};

export { getS3Object, s3 };
