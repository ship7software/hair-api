const mongoose = require('mongoose');
const ItemVendaSchema = require('../itemVenda/itemVenda-schema');
const Schema   = mongoose.Schema;

const produtoSchema = new Schema({}, { discriminatorKey: 'produto' });

module.exports = ItemVendaSchema.discriminator('Produto', produtoSchema);
