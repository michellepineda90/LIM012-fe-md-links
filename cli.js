#!/usr/bin/env node
const mdLinks = require('./src/mdLinks');

const userPath = process.argv[2];
const option1 = process.argv[3];
const option2 = process.argv[4];

// test arguments
const userPath2 = './tests/md-files/all-valid-links.md';

mdLinks(userPath2, { validate: true })
  .then((arr) => console.table(arr))
  .catch((err) => console.error(err.message));
