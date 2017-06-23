const mongoose = require('mongoose');
const ModelBase = require('./../../lib/ModelBase');
const HorarioSchema = require('./../../lib/HorarioSchema');

const configuracaoSchema = new ModelBase({
  horarios: [HorarioSchema]
}, { collection: 'configuracoes' });

module.exports = mongoose.model('Configuracao', configuracaoSchema);
