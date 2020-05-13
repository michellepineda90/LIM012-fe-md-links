const utilityFunctions = require('../src/utils');
const mock = require('./mock-data');

describe('resolvePath deals with normalizing the path entered by user', () => {
  test('Resolves a relative path into an absolute path', () => {
    expect(utilityFunctions.resolvePath(mock.valRelPath)).toEqual(mock.valAbsPath);
  });
  test('Returns an unmodified absolute path', () => {
    expect(utilityFunctions.resolvePath(mock.valAbsPath)).toEqual(mock.valAbsPath);
  });
});

describe('validatePath returns booleans according to validity/existence of path', () => {
  test('Returns true when path is valid and/or exists', () => {
    expect(utilityFunctions.validatePath(mock.valAbsPath)).toEqual(true);
  });
  test('should throw Error message when path is invalid or does not exist', () => {
    expect.assertions(1);
    try {
      utilityFunctions.validatePath(mock.invRelPath);
    } catch (e) {
      expect(e.message).toBe('La ruta ingresada no es válida o no existe, revísala e intenta de nuevo');
    }
  });
});

describe('retrieveLinks retrieves all/any links from an individual .md file', () => {
  test('Returns an empty array if there are no links', () => {
    expect(utilityFunctions.retrieveLinks(mock.emptyFile)).toEqual([]);
  });
  test('Returns an array of links from .md file', () => {
    expect(utilityFunctions.retrieveLinks(mock.valAbsPath)).toEqual(mock.rawLinks);
  });
});

describe.skip('getMdFiles from directory returns an array of all .md files inside a directory/subdirectories', () => {
  test('Returns an empty array if there are no links', () => {
    expect(utilityFunctions.retrieveLinks(mock.emptyFile)).toEqual([]);
  });
  test('Returns an array of links from .md file', () => {
    expect(utilityFunctions.retrieveLinks(mock.valAbsPath)).toEqual(mock.rawLinks);
  });
});

describe('formatLinks formats link info into object with three properties', () => {
  test('Returns an array with an empty object if empty object passed', () => {
    expect(utilityFunctions.formatLinks(mock.emptyFile, [])).toEqual([]);
  });
  test('Returns an array of objects with href, text, and file properties', () => {
    expect(utilityFunctions.formatLinks(mock.valAbsPath, mock.rawLinks)).toEqual(mock.formatdLinks);
  });
});

describe('validateLinks makes http requests to each link to check status if user enters validate option', () => {
  it('Returns an array of objects with href, text, file, status, statusText', (done) => {
    utilityFunctions.validateLinks(mock.formatdLinks).then((element) => {
      expect(element).toEqual(mock.validatdLinks);
      done();
    });
  });
});

/*
Tests de integración para el CLI
Llamar a la librería con dos parámetros y asegurarme que los estoy recibiendo
Además: testeo para múltiples OS, mock para fetch()
*/
