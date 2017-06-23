const fs = require('fs');
const path = require('path');
const arquivos = fs.readdirSync(__dirname);

module.exports = (router) => {
  for (let idx = 0; idx < arquivos.length; idx += 1) {
    const element = arquivos[idx];
    const dir = path.join(__dirname, element);
    if (fs.lstatSync(dir).isDirectory()) {
      const routerFile = path.join(dir, `${element}-router.js`);

      if (fs.existsSync(routerFile)) {
        /* eslint-disable */
        router.use(`/${element}`, require(routerFile));
        /* eslint-enable */
      }
    }
  }

  return router;
};
