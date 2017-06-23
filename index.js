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
const Raven         = require('raven');
const app           = express();
const config        = yamlConfig.load(path.join(__dirname, '/config.yml'));
const Ship7Middle   = require('ship7-api-lib').Middleware;
const business      = require('./model/loadBusiness');

app.set('config', config);
Raven.config(config.raven).install();
mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGO_DB_URI || config.mongo.url);

mongoose.set('debug', process.env.NODE_ENV !== 'test');

app.use(Raven.requestHandler());

app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(Ship7Middle.VerifyAuth({
  whiteList: [],
  authApi: config.auth.api,
  application: 'hair'
}));

app.use('/', routes);
app.get('/me', Ship7Middle.Perfil);
app.use(Raven.errorHandler());
app.use(Ship7Middle.Error(business));

app.listen(process.env.PORT || config.server.port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Magic happens on port ${(process.env.PORT || config.server.port)}`);
  }
});

module.exports = app;
