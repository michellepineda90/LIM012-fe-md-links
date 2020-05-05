const utilityFunctions = require('../src/utils');
const mockData = require('./mock-data');

describe('Resolves a path', () => {
  test('Resolves a relative path into an absolute path', () => {
    expect(utilityFunctions.resolvePath(mockData.valRelPath)).toEqual(mockData.valAbsPath);
  });
  test('Returns an unmodified absolute path', () => {
    expect(utilityFunctions.resolvePath(mockData.valAbsPath)).toEqual(mockData.valAbsPath);
  });
});

describe('Validates a path', () => {
  test('Returns true when path is valid and/or exists', () => {
    expect(utilityFunctions.validatePath(mockData.valAbsPath)).toEqual(true);
  });
  test('should throw Error message when path is invalid or does not exist', () => {
    expect.assertions(1);
    try {
      utilityFunctions.validatePath(mockData.invRelPath);
    } catch (e) {
      expect(e.message).toBe('La ruta ingresada no es válida o no existe, revísala e intenta de nuevo');
    }
  });
});

describe.skip('Retrieves all/any links from a .md file', () => {
  test('Returns an empty array if there are no links', () => {
    expect(utilityFunctions.retrieveLinks()).toEqual();
  });
  test('Returns an array of links from .md file', () => {
    expect(utilityFunctions.retrieveLinks()).toEqual();
  });
});

describe.skip('Formats link into object with three properties', () => {
  test('Returns an array with an empty object if empty object passed', () => {
    expect(utilityFunctions.formatLinks()).toEqual();
  });
  test('Returns an array of objects with href, text, and file properties', () => {
    expect(utilityFunctions.formatLinks()).toEqual();
  });
});

/*
describe('asynchronous utility functions', () => {
  test('Promise - Promise(resolve, reject)', (done) => {
    const url = 'http://localhost:3000/posts';
    fetch(url).then((datos) => {
      const data = [{ id: 1, title: 'json-server', author: 'typicode' }];
      expect(datos.length).toBeGreaterThanOrEqual(1);
      expect(datos[0].id).toBeGreaterThanOrEqual(1);
      expect(datos).toEqual(data);
      done();
    });
  });
  test('Promise - .resolves', () => {
    const url = 'http://localhost:3000/profile';
    return expect(fetch(url)).resolves.toEqual({ name: 'typicode' });
  });
  test('Promise - .rejects', () => {
    const url = 'http://localhost:3000/fail';
    return expect(fetch(url)).rejects.toEqual('Not Found');
  });
  test('Promise - Promise.resolve', () => {
    const data = { nombre: 'Test', estado: true };
    return expect(Promise.resolve(data)).resolves.toEqual(data);
  });
  test('Promise - Promise.reject', () => {
    const data = { error: 'Error', code: 200 };
    return expect(Promise.reject(data)).rejects.toEqual(data);
  });
});

Tests de integración para el CLI
Llamar a la librería con dos parámetros y asegurarme que los estoy recibiendo
Además: testeo para múltiples OS, mock para fetch()
*/
