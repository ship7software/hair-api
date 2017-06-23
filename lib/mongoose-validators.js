const validator = require('validator');

module.exports = {
  Telefone: (value, cb) => {
    if (!value) {
      return cb(false);
    }
    const telefoneCelularPattern = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/;
    const isValid = validator.matches(value, telefoneCelularPattern);

    cb(isValid, 'Formato inválido. Esperado: (00) 00000-0000 - Valor: {VALUE}', 'format');
  },
  Email: (value, cb) => {
    if (!value) {
      return cb(false);
    }
    cb(validator.isEmail(value), 'Email inválido. Valor: {VALUE}', 'format');
  }
};
