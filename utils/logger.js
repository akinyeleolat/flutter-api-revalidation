const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: {
    service: 'flutter-api-revalidation',
    time: new Date().toISOString(),
  },
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
  exitOnError: false,
});

module.exports = logger;
