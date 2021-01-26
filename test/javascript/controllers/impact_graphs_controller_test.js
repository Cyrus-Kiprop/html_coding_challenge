import { Application } from 'stimulus';

import ImpactGraphs from '../../../src/controllers/impact_graphs_controller';
import jsonData from '../../../src/db/data.json';
import webpageData from '../DOM';

// mock the localStorage
const localStorage = { data: {} };

describe('ImpactGraphs', () => {
  describe('connect', () => {
    beforeEach(() => {
      document.body.innerHTML = webpageData;

      const application = Application.start();

      application.register('impact', ImpactGraphs);
    });

    it('should cache the data on localStorage', () => {
      const setLocalStorage = jest.fn(() => {
        localStorage.data = jsonData;
      });
      setLocalStorage();
      expect(localStorage.data).toEqual(jsonData);
    });
  });

  test('the page has a title of inject printer', () => {
    const title = document.getElementsByTagName('h1')[0];
    expect(title.innerHTML.trim()).toEqual('Inject Printer'.trim());
  });
});
