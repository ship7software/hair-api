const Model = require('ship7-api-lib').Facade;
const servicoSchema  = require('./servico-schema');

class ServicoModel extends Model {}

module.exports = new ServicoModel(servicoSchema);
