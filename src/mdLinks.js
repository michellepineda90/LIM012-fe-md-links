const utilityFunctions = require('./utils');

const mdLinks = (pathEnteredByUser, options) => new Promise((resolve, reject) => {
  const absolutePath = utilityFunctions.resolvePath(pathEnteredByUser);
  if (utilityFunctions.validatePath(absolutePath)) {
    const links = utilityFunctions.retrieveLinks(absolutePath);
    const formattedLinks = utilityFunctions.formatLinks(pathEnteredByUser, links);
    if (!options || options.validate === false) {
      resolve(formattedLinks);
    }
    if (options.validate === true) {
      resolve('aquí irían links CON validación');
    }
  }
  reject(err);
});

module.exports = mdLinks;
