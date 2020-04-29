// CLI
const path = require('path');
const mdLinks = require('./src/mdLinks');


// test arguments
const userPath1 = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/valid.md';
const userPath2 = '/md-files/valid.md';
const userPath3 = '/tests/equis.md';
// test options { validate: false } { validate: true }

mdLinks(userPath1)
  .then((arr) => console.log(arr))
  .catch((err) => console.error(err));
