const Controller = require('ship7-api-lib').Controller;
const agendamentoFacade  = require('./agendamento-facade');

class AgendamentoController extends Controller {}

module.exports = new AgendamentoController(agendamentoFacade);
