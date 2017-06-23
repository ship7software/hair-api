const Model = require('ship7-api-lib').Facade;
const agendamentoSchema  = require('./agendamento-schema');

class AgendamentoModel extends Model {}

module.exports = new AgendamentoModel(agendamentoSchema);
