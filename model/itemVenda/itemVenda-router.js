const Router = require('express').Router;
const controller = require('./itemVenda-controller');

const router = new Router();

router.route('/')
  .get((...args) => controller.find(...args));

router.route('/one')
  .get((...args) => controller.findOne(...args));

router.route('/:id')
  .get((...args) => controller.findById(...args));

module.exports = router;
