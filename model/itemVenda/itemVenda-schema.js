const mongoose = require('mongoose');
const ModelBase = require('./../../lib/ModelBase');

const itemVendaSchema = new ModelBase({
  nome: { type: String, required: true, trim: true, uppercase: true },
  preco: { type: Number },
  comissao: { type: Number }
}, { collection: 'itensVenda' });

itemVendaSchema.index({ empresa: 1, nome: 1 }, { unique: true });

module.exports = mongoose.model('ItemVenda', itemVendaSchema);
