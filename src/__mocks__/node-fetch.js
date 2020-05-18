const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

fetchMock
  .mock('validurl', 200)
  .mock('invalidurl', 404);

module.exports = fetchMock;
