const Controller = require('ship7-api-lib').Controller;
const serviceFacade  = require('./service-facade');

class ServiceController extends Controller {}

module.exports = new ServiceController(serviceFacade);
