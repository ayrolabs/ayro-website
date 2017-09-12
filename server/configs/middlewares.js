const settings = require('./settings');
const logger = require('../utils/logger');
const prerender = require('prerender-node');

exports.configure = (app) => {

  logger.info('Configuring middlewares');

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Token');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
  });

  if (settings.prerender) {
    app.use(prerender.set('prerenderServiceUrl', settings.prerender.url));
  }
};
