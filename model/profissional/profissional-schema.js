const mongoose = require('mongoose');
const PessoaModelBase = require('./../../lib/PessoaModelBase');
const HorarioSchema = require('./../../lib/HorarioSchema');

const profissionalSchema = new PessoaModelBase({
  comissao: { type: Number },
  habilidades: [{
    servico: { type: mongoose.SchemaTypes.ObjectId, ref: 'Servico', required: true },
    comissao: { type: Number }
  }],
  horarios: [HorarioSchema]
}, { collection: 'profissionais' });

module.exports = mongoose.model('Profissional', profissionalSchema);
