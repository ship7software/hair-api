const Model = require('ship7-api-lib').Facade;
const itemVendaSchema  = require('./itemVenda-schema');

class ItemVendaModel extends Model {}

module.exports = new ItemVendaModel(itemVendaSchema);
