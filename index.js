// CLI

const mdLinks = require('./src/mdLinks');

// test arguments
const userPath1 = 'C:/Users/Instructor3/Desktop/personal/Laboratoria/LIM012-fe-md-links/tests/md-files/valid.md';
const userPath2 = './md-files/valid.md';


mdLinks(userPath2, { validate: false })
  .then((str) => console.log(str));
