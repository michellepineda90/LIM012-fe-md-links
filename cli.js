#!/usr/bin/env node

const chalk = require('chalk');
const mdLinks = require('./src/mdLinks');


const valAbsPath = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files';

const valRelPath = './tests/md-files/all-valid-links.md';

const invRelPath = './tests/equis.md';

const emptyFile = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/empty.md';


const formatCliOutput = (arrayOfLinkObjects) => {
  let output = '';
  arrayOfLinkObjects.forEach((link) => {
    const keys = Object.keys(link);
    output = `${link.file} ${link.href} ${link.text}`;
    if (link.status && link.statusText) {
      if (link.statusText === 'ok') {
        output += `${chalk.green(link.status)} ${chalk.green(link.statusText)}`;
      }
      output += `${chalk.red(link.status)} ${chalk.red(link.statusText)}`;
    }
    return output;
  });
};

const getStatistics = (arrayOfLinkObjects) => {
  const links = arrayOfLinkObjects.map((element) => element.href);
  const uniqueLinks = Array.from(new Set(links));
  return `Total: ${arrayOfLinkObjects.length}\n Unique: ${uniqueLinks.length}`;
};

const getValidityStatistics = (arrayOfLinkObjects) => {
  const totalAndUniqueLinks = getStatistics(arrayOfLinkObjects);
  const brokenLinks = arrayOfLinkObjects.filter((element) => element.status !== 200);
  return `${totalAndUniqueLinks}\n ${chalk.red('Broken:')} ${brokenLinks.length}`;
};

const userArguments = process.argv;

const cli = (args) => {
  if (args.length === 3) {
    return mdLinks(args[2])
      .then((arr) => formatCliOutput(arr));
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
};

cli(valAbsPath)
  .then((arr) => console.log(arr))
  .catch((err) => console.error(err.message));


// mdLinks(valRelPath)
//   .then((arr) => console.log(arr))
//   .catch((err) => console.error(err.message));
