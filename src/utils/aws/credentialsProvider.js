import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';
import { defaultProvider } from '@aws-sdk/credential-provider-node';

/*
We need this to patch some functionality that went missing in the move from aws-sdk v2 to v3.  In v2 the built in
assume-role functionality that made AWS_PROFILE work was dropped, because of the modularisation.  To fix it they
would need to make every module depend on STS module, this would bloat the dependencies, and also introduce a
circular dependency.

The work around here is based on this blog post:
  https://advancedweb.hu/how-to-fix-the-profile-support-in-the-aws-js-sdk-v3/

Amd the bug of the circular dependency issue is here:
  https://github.com/aws/aws-sdk-js-v3/issues/1193
 */

// callback to assume a role using the sourceCreds
async function assume(sourceCreds, params) {
  const sts = new STSClient({
    region: 'aws-global',
    credentials: sourceCreds,
  });

  const result = await sts.send(new AssumeRoleCommand(params));
  const newCredentials = result.Credentials;
  if (!newCredentials) {
    throw new Error('unable to assume credentials = empty credentials object');
  }

  return {
    accessKeyId: String(newCredentials.AccessKeyId),
    secretAccessKey: String(newCredentials.SecretAccessKey),
    sessionToken: newCredentials.SessionToken,
  };
}

function awsInitParams(region = 'eu-west-2') {
  return {
    region,
    credentials: defaultProvider({ roleAssumer: assume }),
  };
}

module.exports = awsInitParams;
