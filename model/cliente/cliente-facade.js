const Model = require('ship7-api-lib').Facade;
const clienteSchema  = require('./cliente-schema');

class ClienteModel extends Model {}

module.exports = new ClienteModel(clienteSchema);
