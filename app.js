require('dotenv').config();
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const routes = require('./routes/v1');

const envConfig = require('./config');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

if (envConfig.environment === 'production') {
  app.use(compression());
  app.use(helmet());
}

// Handle cases where invalid JSON data is passed
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    res.json({
      message: 'Invalid JSON  payload passed.',
      status: 'error',
    });
  } else {
    next();
  }
});

const version = '/';

app.use(version, routes);

// Handle cases where no route is matched
app.all('*', (req, res) => {
  res.status(404).json({ message: `No resources/endpoint implemented for  ${req.method} ${req.path} route access`, status: 'error' });
});

app.use(errorHandler);

module.exports = app;
