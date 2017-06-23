const Model = require('ship7-api-lib').Facade;
const profissionalSchema  = require('./profissional-schema');

class ProfissionalModel extends Model {}

module.exports = new ProfissionalModel(profissionalSchema);
