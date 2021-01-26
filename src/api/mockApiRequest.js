import jsonData from '../db/data.json';

const mockApiRequest = () => {
  const fakeApiRequest = () =>
    new Promise((resolve, reject) => {
      if (!jsonData) {
        return setTimeout(() => reject(new Error('Users not found')), 250);
      }

      setTimeout(() => resolve(jsonData), 250);
    });

  return fakeApiRequest();
};

export default mockApiRequest;
