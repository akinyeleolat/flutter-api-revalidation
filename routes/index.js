const routeList = require('./v1');

const routes = (app) => {
  app.use('/', routeList);
};

module.exports = routes;
