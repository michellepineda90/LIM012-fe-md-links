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

const cli = (args) => {
  if (args.length === 3 && (args[2] === '--help' || args[2] === '-h')) {
    return new Promise((resolve) => { resolve(printHelp); });
  }
  if (args.length === 3) {
    return mdLinks(args[2])
      .then((arr) => (formatCliOutput(arr)));
  }
  if (args.length === 4 && args[3] === '--validate') {
    return mdLinks(args[2], { validate: true })
      .then((arr) => formatCliOutput(arr));
  }
  if (args.length === 4 && args[3] === '--stats') {
    return mdLinks(args[2], { validate: true })
      .then((arr) => getStatistics(arr));
  }
  if (args.length === 5 && args[3] === '--stats' && args[4] === '--validate') {
    return mdLinks(args[2], { validate: true })
      .then((arr) => getValidityStatistics(arr));
  }
  return Promise.resolve(printHelp);
};

cli(userArguments)
  .then((arr) => console.log(arr))
  .catch((err) => console.error(err.message));
