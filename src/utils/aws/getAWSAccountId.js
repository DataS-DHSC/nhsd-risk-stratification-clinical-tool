import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
import awsInitParams from './credentialsProvider';

const sts = new STSClient(awsInitParams('aws-global'));

const getAWSAccountId = async () =>
  (await sts.send(new GetCallerIdentityCommand())).Account;

export { getAWSAccountId, sts };
