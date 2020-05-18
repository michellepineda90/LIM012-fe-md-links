#!/usr/bin/env node

const chalk = require('chalk');
const mdLinks = require('./src/mdLinks');

const formatCliOutput = (arrayOfLinkObjects) => {
  let output = '';
  arrayOfLinkObjects.forEach((link) => {
    output += `${link.file} ${link.href}`;
    if (link.status && link.statusText) {
      if (link.statusText === 'OK') {
        output += ` ${chalk.green(link.status)} ${chalk.green(link.statusText)}`;
      } else {
        output += ` ${chalk.red(link.status)} ${chalk.red(link.statusText)}`;
      }
    }
    output += ` ${link.text}\n`;
  });
  return output;
};

const getStatistics = (arrayOfLinkObjects) => {
  const links = arrayOfLinkObjects.map((element) => element.href);
  const uniqueLinks = Array.from(new Set(links));
  return `Total: ${arrayOfLinkObjects.length}\nUnique: ${uniqueLinks.length}`;
};

const getValidityStatistics = (arrayOfLinkObjects) => {
  const totalAndUniqueLinks = getStatistics(arrayOfLinkObjects);
  const brokenLinks = arrayOfLinkObjects.filter((element) => element.status !== 200);
  return `${totalAndUniqueLinks}\n${chalk.red.inverse('Broken:')} ${chalk.red.inverse(brokenLinks.length)}`;
};

const printHelp = `
  To run this library, execute the following: md-links <path-to-file> [options]

  In total, these are the options:
  Option 1: md-links <path-to-file>
  Option 2: md-links <path-to-file> --validate
  Option 3: md-links <path-to-file> --stats
  Option 4: md-links <path-to-file> --stats --validate

  If no additional parameters are added to md-links, this help message will display by default
`;

const userArguments = process.argv;

const print = (data) => console.table(data);

if (userArguments.length === 3 && (userArguments[2] === '--help' || userArguments[2] === '-h')) {
  console.log(printHelp);
}
if (userArguments.length === 3) {
  mdLinks(userArguments[2])
    .then(formatCliOutput)
    .then(print)
    .catch((err) => console.error(err.message));
}
if (userArguments.length === 4 && userArguments[3] === '--validate') {
  mdLinks(userArguments[2], { validate: true })
    .then(formatCliOutput)
    .then(print)
    .catch((err) => console.error(err.message));
}
if (userArguments.length === 4 && userArguments[3] === '--stats') {
  mdLinks(userArguments[2], { validate: true })
    .then(getStatistics)
    .then(print)
    .catch((err) => console.error(err.message));
}
if (userArguments.length === 5 && userArguments[3] === '--stats' && userArguments[4] === '--validate') {
  mdLinks(userArguments[2], { validate: true })
    .then(getValidityStatistics)
    .then(print)
    .catch((err) => console.error(err.message));
}
console.log(printHelp);
