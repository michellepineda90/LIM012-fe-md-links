const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const slash = require('slash');

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

const retrieveLinks = (absolutePath) => {
  let arrayOfLinks = [];
  const mdContentToString = fs.readFileSync(absolutePath).toString();
  if (mdContentToString.length) {
    arrayOfLinks = mdContentToString.match(linkRegEx);
    return arrayOfLinks;
  }
  return arrayOfLinks;
};

const formatLinks = (pathEnteredByUser, arrayOfLinks) => {
  const formattedLinks = [];
  if (arrayOfLinks.length) {
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
  retrieveLinks,
  formatLinks,
  validateLinks,
};
