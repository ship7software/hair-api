const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true, trim: true },
  active: { type: Boolean, required: true, default: true },
  organization: { type: String, required: true }
});

serviceSchema.plugin(require('mongoose-autopopulate'));
serviceSchema.plugin(require('mongoose-unique-validator'));

module.exports = mongoose.model('Service', serviceSchema);
