const utilityFunctions = require('./utils');

const mdLinks = (pathEnteredByUser, options) => new Promise((resolve) => {
  const absolutePath = utilityFunctions.resolvePath(pathEnteredByUser);
  let links = [];
  if (utilityFunctions.validatePath(absolutePath)) {
    links = utilityFunctions.getArrayOfLinkObjects;
  }
  const formattedLinks = utilityFunctions.formatLinks(links);
  if (!options || options.validate === false) {
    resolve(formattedLinks);
  }
  if (options.validate === true) {
    const validatedLinks = utilityFunctions.validateLinks(formattedLinks);
    resolve(validatedLinks);
  }
});

module.exports = mdLinks;
