const Model = require('ship7-api-lib').Facade;
const produtoSchema  = require('./produto-schema');

class ProdutoModel extends Model {}

module.exports = new ProdutoModel(produtoSchema);
