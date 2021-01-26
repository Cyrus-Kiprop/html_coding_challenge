import mockApiRequest from '../../../src/api/mockApiRequest';
import jsonData from '../../../src/db/data.json';

test('the api request should return a promise object that resolves to a json data', () =>
  mockApiRequest().then((data) => {
    data.json().then((result) => {
      expect(result)
        .toBe(jsonData)
        .catch((e) => expect(e).toMatch('error'));
    });
  }));
