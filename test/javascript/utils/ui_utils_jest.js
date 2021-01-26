import uiUtils from '../../../src/utils/ui_utils';

import jsonData from '../../../src/db/data.json';
import DOM from '../domContent';

const { calcHeight, calcViewportHeight, renderDropdownItems } = uiUtils;

describe('uiUtils', () => {
  beforeEach(() => {
    document.body.innerHTML = DOM;
  });

  const parent = document.getElementById('svg-wrapper');
  const dataSet = jsonData.impacts;
  const categories = Object.keys(dataSet);
  const defaultCategory = categories[0];
  const maxHeight = Math.max(...Object.values(dataSet[defaultCategory]));
  const height = Math.round(Math.random() * 100);

  describe('calcHeight', () => {
    it('should return a height confined within the parent height height attribute ', () => {
      const parent = document.getElementById('svg-wrapper');
      expect(calcHeight(height, maxHeight, parent)).toBeLessThan(
        Number(parent.getAttribute('height')),
      );
    });
  });

  describe('calcviewPortHeight', () => {
    it('Should return the height of the svg viewport', () => {
      const parent = document.getElementById('svg-wrapper');
      expect(calcViewportHeight(parent)).toEqual(
        Number(parent.getAttribute('height')),
      );
    });
  });

  describe('renderDropDownItems', () => {
    it('should populate the dropdown menu with option items', () => {
      const select = document.getElementById('select');
      renderDropdownItems(categories, select);
      expect(Array.from(select.childNodes).length).toEqual(2);
    });
  });
});
