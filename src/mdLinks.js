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
      const validatedLinks = utilityFunctions.validateLinks(formattedLinks);
      resolve(validatedLinks);
    }
  }
  reject(new Error('Oops, algo salió mal'));
});

module.exports = mdLinks;
