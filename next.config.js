const bundleAnalyzer = require('@next/bundle-analyzer');
const DotEnv = require('dotenv');

DotEnv.config();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',
  future: {
    webpack5: true,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({ resourceRegExp: /\/__test__\// })
    );
    return config;
  },
  generateBuildId: async () => process.env.CI_COMMIT_SHA || 'test_build_id',
});
