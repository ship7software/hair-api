const mongoose = require('mongoose');
const PessoaModelBase = require('./../../lib/PessoaModelBase');

const clienteSchema = new PessoaModelBase({}, { collection: 'clientes' });

module.exports = mongoose.model('Cliente', clienteSchema);
