const mongoose = require('mongoose');
const ItemVendaSchema = require('../itemVenda/itemVenda-schema');
const Schema   = mongoose.Schema;

const servicoSchema = new Schema({
  duracaoPadrao: { type: Number }
}, { discriminatorKey: 'servico' });

module.exports = ItemVendaSchema.discriminator('Servico', servicoSchema);
