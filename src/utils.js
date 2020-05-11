const fs = require('fs');
const path = require('path');
const slash = require('slash');
const fetch = require('node-fetch');

const linkRegEx = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const hrefRegEx = /\((http|https|ftp|ftps).+?\)/g;
const textRegEx = /\[.+?\]/g;

const resolvePath = (pathEnteredByUser) => {
  let absolutePath = pathEnteredByUser;
  if (!path.isAbsolute(pathEnteredByUser)) {
    absolutePath = slash(path.resolve(pathEnteredByUser));
  }
  return absolutePath;
};

const validatePath = (absolutePath) => {
  const pathIsValid = fs.existsSync(absolutePath);
  if (!pathIsValid) {
    throw new Error('La ruta ingresada no es válida o no existe, revísala e intenta de nuevo');
  }
  return pathIsValid;
};

const getMdFilesFromDirectory = (absolutePath) => {
  let individualFilePath = '';
  const arrayOfMdFiles = [];
  fs.readdirSync(absolutePath).forEach((element) => {
    individualFilePath = `${absolutePath}/${element}`;
    if (fs.statSync(individualFilePath).isFile) {
      if (path.extname(individualFilePath) === '.md') {
        arrayOfMdFiles.push(individualFilePath);
      }
    } else {
      return getMdFilesFromDirectory(individualFilePath);
    }
  });
  return arrayOfMdFiles;
};

const retrieveLinks = (absolutePath) => {
  let arrayOfLinks = [];
  const mdContentToString = fs.readFileSync(absolutePath).toString();
  if (mdContentToString.length) {
    arrayOfLinks = mdContentToString.match(linkRegEx);
    return arrayOfLinks;
  }
  return arrayOfLinks;
};

const getArrayOfLinkObjects = (absolutePath) => {
  let links = [];
  if (fs.statSync(absolutePath).isDirectory) {
    const arrayOfMdFiles = getMdFilesFromDirectory(absolutePath);
    links = arrayOfMdFiles.forEach((element) => retrieveLinks(element));
  } else {
    links = retrieveLinks(absolutePath);
  }
  return links;
};

const formatLinks = (arrayOfLinks) => {
  const formattedLinks = [];
  if (arrayOfLinks.length) {
    arrayOfLinks.forEach((link) => {
      const text = link.match(textRegEx)[0];
      const url = link.match(hrefRegEx)[0];
      formattedLinks.push({
        href: url.substring(1, url.length - 1),
        text: text.substring(1, text.length - 1).slice(0, 49),
        file: resolvePath(link),
      });
    });
    return formattedLinks;
  }
  return formattedLinks;
};

const validateLinks = (formattedLinks) => new Promise((resolve, reject) => {
  const linksToValidate = formattedLinks.slice();
  const extractedUrls = linksToValidate.map((link) => (link.href));
  const httpResponses = extractedUrls.map((url) => fetch(url));
  Promise.all(httpResponses)
    .then((responses) => {
      responses.forEach((response, index) => {
        linksToValidate[index].status = response.status;
        linksToValidate[index].statusText = response.statusText;
      });
      resolve(linksToValidate);
    })
    .catch((err) => reject(err));
});

module.exports = {
  resolvePath,
  validatePath,
  getMdFilesFromDirectory,
  retrieveLinks,
  getArrayOfLinkObjects,
  formatLinks,
  validateLinks,
};
