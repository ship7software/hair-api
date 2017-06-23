const Model = require('ship7-api-lib').Facade;
const serviceSchema  = require('./service-schema');

class ServiceModel extends Model {}

module.exports = new ServiceModel(serviceSchema);
