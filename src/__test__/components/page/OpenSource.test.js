import React from 'react';
import { render } from '@testing-library/react';
import OpenSource from '../../../components/page/OpenSource';

const inputLicenses1 = {
  '@apidevtools/json-schema-ref-parser@9.0.7': {
    licenses: 'MIT',
    repository: 'https://github.com/APIDevTools/json-schema-ref-parser',
    publisher: 'James Messinger',
    url: 'https://jamesmessinger.com',
    name: '@apidevtools/json-schema-ref-parser',
    version: '9.0.7',
    description: 'Parse, Resolve, and Dereference JSON Schema $ref pointers',
    licenseFile: 'node_modules/@apidevtools/json-schema-ref-parser/LICENSE',
    copyright: 'Copyright (c) 2015 James Messinger',
  },
  '@aws-crypto/sha256-browser@1.1.0': {
    licenses: 'Apache-2.0',
    repository: 'https://github.com/aws/aws-sdk-js-crypto-helpers',
    publisher: 'AWS Crypto Tools Team',
    email: 'aws-cryptools@amazon.com',
    url:
      'https://docs.aws.amazon.com/aws-crypto-tools/index.html?id=docs_gateway#lang/en_us',
    name: '@aws-crypto/sha256-browser',
    version: '1.1.0',
    description:
      'SHA256 wrapper for browsers that prefers `window.crypto.subtle` but will fall back to a pure JS implementation in @aws-crypto/sha256-js to provide a consistent interface for SHA256.',
    licenseFile: 'node_modules/@aws-crypto/sha256-browser/LICENSE',
  },
  '@aws-crypto/sha256-js@1.1.0': {
    licenses: 'Apache-2.0',
    repository: 'https://github.com/aws/aws-sdk-js-crypto-helpers',
    publisher: 'AWS Crypto Tools Team',
    email: 'aws-cryptools@amazon.com',
    url:
      'https://docs.aws.amazon.com/aws-crypto-tools/index.html?id=docs_gateway#lang/en_us',
    name: '@aws-crypto/sha256-js',
    version: '1.1.0',
    description: 'A pure JS implementation SHA256.',
    licenseFile: 'node_modules/@aws-crypto/sha256-js/LICENSE',
  },
  'jest-environment-jsdom@26.6.2': {
    licenses: 'MIT',
    repository: 'https://github.com/facebook/jest',
    name: 'jest-environment-jsdom',
    version: '26.6.2',
    description: '',
    licenseFile: 'node_modules/jest-environment-jsdom/LICENSE',
    copyright: 'Copyright (c) Facebook, Inc. and its affiliates.',
  },
  'jest-environment-node@26.6.2': {
    licenses: 'MIT',
    repository: 'https://github.com/facebook/jest',
    name: 'jest-environment-node',
    version: '26.6.2',
    description: '',
    licenseFile: 'node_modules/jest-environment-node/LICENSE',
    copyright: 'Copyright (c) Facebook, Inc. and its affiliates.',
  },
  'webdriver@7.5.3': {
    licenses: 'MIT',
    repository: 'https://github.com/webdriverio/webdriverio',
    publisher: 'Christian Bromann',
    email: 'christian@saucelabs.com',
    name: 'webdriver',
    version: '7.5.3',
    description:
      'A Node.js bindings implementation for the W3C WebDriver and Mobile JSONWire Protocol',
    licenseFile: 'node_modules/webdriver/LICENSE-MIT',
    copyright: 'Copyright (c) OpenJS Foundation and other contributors',
  },
};

const inputLicenses2 = {
  MITFluentAssertions: {
    licenses: 'Apache-2.0',
  },
  'coverlet.collector': {
    licenses: 'MIT',
  },
  AWSXRayRecorder: {
    licenses: 'Apache-2.0',
  },
  'Amazon.Lambda.Core': {
    licenses: 'Apache-2.0',
  },
};

const setup = () =>
  render(<OpenSource licenseMapArray={[inputLicenses1, inputLicenses2]} />);

describe('OpenSource', () => {
  it('should match snapshot', () => {
    const container = setup();

    expect(container.asFragment()).toMatchSnapshot();
  });
});
