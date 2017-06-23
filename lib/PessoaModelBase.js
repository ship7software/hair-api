const ModelBase = require('./ModelBase');
const MongooseValidator = require('./mongoose-validators');

class PessoaModelBase extends ModelBase {
  constructor(definition, options) {
    super(definition, options);
    this.add({
      nome: { type: String, required: true, uppercase: true, trim: true },
      email: { type: String, required: true, lowercase: true, trim: true },
      telefone: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        validate: {
          isAsync: true,
          validator: MongooseValidator.Telefone
        }
      }
    });

    this.index({ empresa: 1, nome: 1 }, { unique: true });
  }
}

module.exports = PessoaModelBase;
