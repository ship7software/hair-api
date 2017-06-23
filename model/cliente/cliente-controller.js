const Controller = require('ship7-api-lib').Controller;
const clienteFacade  = require('./cliente-facade');

class ClienteController extends Controller {}

module.exports = new ClienteController(clienteFacade);
