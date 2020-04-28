const fs = require('fs');
const path = require('path');

const linkRegEx = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const hrefRegEx = /\((http|https|ftp|ftps).+?\)/g;
const textRegEx = /\[.+?\]/g;

const retrieveLinks = (absolutePath) => {
  let arrayOfLinks = [];
  const mdContentToString = fs.readFileSync(absolutePath).toString();
  arrayOfLinks = mdContentToString.match(linkRegEx);
  return arrayOfLinks;
};

/* const verifyFileAsMarkdown = (absolutePath) => {
  if (path.extname(absolutePath) === '.md') {
    return retrieveLinks(absolutePath);
  }
};

const verifyIsFileOrFolder = (absolutePath) => {
  const statsFile = fs.statSync(absolutePath);
  if (statsFile.isDirectory() {
    fs.readdirSync(absolutePath);
  }
};
*/

const resolvePath = (pathEnteredByUser) => {
  // ojo con el escape slash
  let absolutePath = '';
  if (path.isAbsolute(pathEnteredByUser)) {
    absolutePath = pathEnteredByUser;
  } else {
    absolutePath = path.resolve(pathEnteredByUser);
  }
  return absolutePath;
};

const validatePath = (absolutePath) => {
  if (fs.existsSync(absolutePath)) {
    retrieveLinks(absolutePath);
  } else {
    throw new Error('La ruta ingresada no es válida o no existe, por favor intenta de nuevo');
  }
};

const formatLinks = (pathEnteredByUser, arrayOfLinks) => {
  const formattedLinks = [];
  arrayOfLinks.forEach((link) => {
    const text = link.match(textRegEx)[0];
    const url = link.match(hrefRegEx)[0];
    formattedLinks.push({
      href: url.substring(1, url.length - 1),
      text: text.substring(1, text.length - 1).slice(0, 49),
      file: pathEnteredByUser,
    });
  });
  return formattedLinks;
};

module.exports = {
  resolvePath,
  validatePath,
  retrieveLinks,
  formatLinks,
};
