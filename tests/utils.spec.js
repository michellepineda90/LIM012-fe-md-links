const utilityFunctions = require('../src/utils');
const mock = require('./mock-data');

describe('resolvePath deals with normalizing the path entered by user', () => {
  test('Resolves a relative path into an absolute path', () => {
    expect(utilityFunctions.resolvePath(mock.relPath)).toEqual(mock.absPath);
  });
  test('Returns an unmodified absolute path', () => {
    expect(utilityFunctions.resolvePath(mock.absPath)).toEqual(mock.absPath);
  });
});

describe('validatePath returns booleans according to validity/existence of path', () => {
  test('Returns true when path is valid and/or exists', () => {
    expect(utilityFunctions.validatePath(mock.absPath)).toEqual(true);
  });
  test('should throw error message when path is invalid or does not exist', () => {
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
    expect(utilityFunctions.retrieveLinks(mock.absPath)).toEqual(mock.rawLinks);
  });
});

describe('getArrayOfLinks runs getMdFiles if path leads to directory and retrieveLinks for md files', () => {
  test('Returns an empty array if there are no links in .md file', () => {
    expect(utilityFunctions.getArrayOfLinks(mock.emptyFile)).toEqual([]);
  });
  test('Returns an empty array if there are no links in directory', () => {
    expect(utilityFunctions.getArrayOfLinks(mock.emptyDir)).toEqual([]);
  });
  test('Returns an array of links from .md file', () => {
    expect(utilityFunctions.getArrayOfLinks(mock.absPath)).toEqual(mock.rawLinks);
  });
  test('Returns an array of links from directory', () => {
    expect(utilityFunctions.getArrayOfLinks(mock.valDir)).toEqual(mock.rawLinks);
  });
});

describe('getMdFiles from directory returns an array of all .md files inside a directory/subdirectories', () => {
  test('Returns an empty array if there are no links', () => {
    expect(utilityFunctions.getMdFilesFromDirectory(mock.emptyDir)).toEqual([]);
  });
  test('Returns an array of .md files', () => {
    expect(utilityFunctions.getMdFilesFromDirectory(mock.valDir)).toEqual(mock.mdFiles);
  });
});

describe('formatLinks formats link info into object with three properties', () => {
  test('Returns an empty array if empty array passed', () => {
    expect(utilityFunctions.formatLinks([], mock.emptyFile)).toEqual([]);
  });
  test('Returns an array of objects with href, text, and file properties', () => {
    expect(utilityFunctions.formatLinks(mock.rawLinks, mock.absPath)).toEqual(mock.formattedLinks);
  });
});

describe('validateLinks makes http requests to each link to check status if user enters validate option', () => {
  it('Returns an array of objects with href, text, file, status, statusText', (done) => {
    utilityFunctions.validateLinks(mock.formattedLinks).then((element) => { // resolves
      expect(element).toEqual(mock.validatedLinks);
      done();
    });
  });
  it('Returns error when fetch fails', () => {
    expect(utilityFunctions.validateLinks()).rejects.toMatch('error');
  });
});
