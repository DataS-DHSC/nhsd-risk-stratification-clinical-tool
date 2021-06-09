const pino = require('pino');

const componentName = 'weblambda';
const componentVersion = process.env.WEB_CODE_VERSION || 'unknown';
const environment = process.env.ENVIRONMENT || 'unknown';
const logLevel = process.env.LOG_LEVEL || 'info';

function createLogger() {
  // Create new pino logger
  // for pino formatting. See: https://getpino.io/#/docs/api?id=formatters-object
  return pino({
    level: logLevel || 'info',
    base: {
      environment,
      componentVersion,
      componentName,
    },
    messageKey: 'description',
    formatters: {
      level(label) {
        return { level: label };
      },
    },
  });
}

const log = createLogger();

module.exports = { log };
