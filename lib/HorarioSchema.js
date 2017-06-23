const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  diaSemanaId: { type: Number, required: true, min: 0, max: 6 },
  horaInicio: { type: String, required: true },
  horaFim: { type: String, required: true }
});

horarioSchema.virtual('diaSemana').get(() => {
  const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  if (this.diaSemanaId) {
    return diasSemana[this.diaSemanaId];
  }
  return '';
});
module.exports = horarioSchema;
