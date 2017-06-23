const Controller = require('ship7-api-lib').Controller;
const produtoFacade  = require('./produto-facade');

class ProdutoController extends Controller {}

module.exports = new ProdutoController(produtoFacade);
