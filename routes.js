const Router = require('express').Router;
const routerLoad = require('./model/loadRoutes');
let router = new Router();

router.route('/').get((req, res) => {
  res.json({
    message: 'Welcome to Ship7 Software Auth API!',
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    description: process.env.npm_package_description
  });
});

router = routerLoad(router);

module.exports = router;
