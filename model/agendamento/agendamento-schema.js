const mongoose = require('mongoose');
const ModelBase = require('./../../lib/ModelBase');

const agendamentoSchema = new ModelBase({
  data: { type: Date, required: true, default: Date.now },
  cliente: { type: mongoose.SchemaTypes.ObjectId, ref: 'Cliente', autopopulate: true, required: true },
  horarios: [
    {
      profissional: { type: mongoose.SchemaTypes.ObjectId, ref: 'Profissional', autopopulate: true, required: true },
      servico: { type: mongoose.SchemaTypes.ObjectId, ref: 'Servico', autopopulate: true, required: true },
      horaFim: { type: String, required: true },
      horaInicio: { type: String, required: true }
    }
  ],
  statusCode: { type: Number, enum: [-1, 0, 1, 2], default: 0, required: true }
}, { collection: 'agendamentos' });

agendamentoSchema.virtual('status').get(() => {
  switch (this.statusCode) {
    case -1: return 'Cancelado';
    case 0: return 'Criado';
    case 1: return 'Confirmado';
    case 2: return 'Iniciado';
    default: return '';
  }
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
