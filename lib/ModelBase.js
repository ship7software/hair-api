const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
const uniqueValidator = require('mongoose-unique-validator');
const hidden = require('mongoose-hidden');
const audit = require('mongoose-audit');

class ModelBase extends Schema {
  constructor(definition, options) {
    const pOptions = options || options;
    pOptions.toObject = pOptions.toObject || { virtuals: true };
    pOptions.toJSON = pOptions.toJSON || { virtuals: true };

    super(definition, options);
    this.add({
      ativo: { type: Boolean, required: true, default: true },
      empresa: { type: String, required: true }
    });
    this.plugin(autopopulate);
    this.plugin(uniqueValidator);
    this.plugin(hidden);
    this.plugin(audit);
  }
}

module.exports = ModelBase;
