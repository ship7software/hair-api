const Controller = require('ship7-api-lib').Controller;
const configuracaoFacade  = require('./configuracao-facade');

class ConfiguracaoController extends Controller {}

module.exports = new ConfiguracaoController(configuracaoFacade);
