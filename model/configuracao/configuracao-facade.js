const Model = require('ship7-api-lib').Facade;
const configuracaoSchema  = require('./configuracao-schema');

class ConfiguracaoModel extends Model {}

module.exports = new ConfiguracaoModel(configuracaoSchema);
