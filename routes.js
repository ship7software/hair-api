const Router = require('express').Router;
const router = new Router();

const service  = require('./model/service/service-router');

router.route('/').get((req, res) => {
  res.json({
    message: 'Welcome to Ship7 Software Auth API!',
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    description: process.env.npm_package_description
  });
});

router.use('/service', service);

module.exports = router;
