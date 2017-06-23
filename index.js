const express       = require('express');
const mongoose      = require('mongoose');
const helmet        = require('helmet');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const bluebird      = require('bluebird');
const cors          = require('cors');
const routes        = require('./routes');
const yamlConfig    = require('node-yaml-config');
const path          = require('path');
const app           = express();
const config        = yamlConfig.load(path.join(__dirname, '/config.yml'));
const Ship7Middle   = require('ship7-api-lib').Middleware;
const serviceBusiness = require('./model/service/service-business');

app.set('config', config);
mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGO_DB_URI || config.mongo.url);

mongoose.set('debug', process.env.NODE_ENV !== 'test');

app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use('/', routes);
app.use(Ship7Middle.Error({
  service: serviceBusiness
}));

app.listen(process.env.PORT || config.server.port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Magic happens on port ${(process.env.PORT || config.server.port)}`);
  }
});

module.exports = app;
