const mdLinks = require('../src/mdLinks');

// mock será para lo fetch()

describe('synchronous utility functions', () => {
  test('Resolve a path', () => {
    expect().toBe(); // check the to method
  });
});

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

/*
Tests de integración para el CLI
Llamar a la librería con dos parámetros y asegurarme que los estoy recibiendo
*/
