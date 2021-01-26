import { Server } from 'miragejs';
import jsonData from '../db/data.json';

const mockApiRequest = () => {
  new Server({
    routes() {
      this.namespace = 'api';
      this.get('/stats/graphs', () => jsonData);
    },
  });

  const fakeApiRequest = () => fetch('api/stats/graphs');

  return fakeApiRequest();
};

export default mockApiRequest;
