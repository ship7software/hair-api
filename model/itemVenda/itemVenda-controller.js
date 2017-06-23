const Controller = require('ship7-api-lib').Controller;
const itemVendaFacade  = require('./itemVenda-facade');

class ItemVendaController extends Controller {}

module.exports = new ItemVendaController(itemVendaFacade);
