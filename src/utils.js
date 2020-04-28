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

const verifyFileAsMarkdown = (absolutePath) => {
  // should contemplate recursive case here
  const statsFile = fs.statSync(absolutePath);
  if (statsFile.isFile() && path.extname(absolutePath) === '.md') {
    retrieveLinks(absolutePath);
  } else {
    throw new Error('Debes ingresar una ruta hacia un archivo markdown');
  }
};

const validatePath = (absolutePath) => {
  if (fs.existsSync(absolutePath)) {
    verifyFileAsMarkdown(absolutePath);
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

exports.validatePath = validatePath;
exports.retrieveLinks = retrieveLinks;
exports.formatLinks = formatLinks;
