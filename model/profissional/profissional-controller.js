const Controller = require('ship7-api-lib').Controller;
const profissionalFacade  = require('./profissional-facade');

class ProfissionalController extends Controller {}

module.exports = new ProfissionalController(profissionalFacade);
