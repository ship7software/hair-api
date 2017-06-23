const fs = require('fs');
const path = require('path');
const arquivos = fs.readdirSync(__dirname);
const business = [];

for (let idx = 0; idx < arquivos.length; idx += 1) {
  const element = arquivos[idx];
  const dir = path.join(__dirname, element);
  if (fs.lstatSync(dir).isDirectory()) {
    const businessFile = path.join(dir, `${element}-business.js`);

    if (fs.existsSync(businessFile)) {
      /* eslint-disable */
      business[element] = require(businessFile);
      /* eslint-enable */
    }
  }
}

module.exports = business;
