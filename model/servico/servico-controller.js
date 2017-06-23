const Controller = require('ship7-api-lib').Controller;
const servicoFacade  = require('./servico-facade');

class ServicoController extends Controller {}

module.exports = new ServicoController(servicoFacade);
