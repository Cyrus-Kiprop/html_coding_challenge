import mockApiRequest from '../../../src/api/mockApiRequest';
import jsonData from '../../../src/db/data.json';

test('the api request should return a promise object that resolves to a json data', () =>
  mockApiRequest().then((result) => {
    expect(result).toBe(jsonData);
  }));
