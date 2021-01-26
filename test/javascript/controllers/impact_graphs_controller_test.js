import { Controller } from 'stimulus';

import uiUtils from '../utils/UI.utils';
import mockApiRequest from '../api/mockApiRequest';
import asyncLocalStorage from '../utils/asyncLocalStorage';

const { drawBars, renderDropdownItems } = uiUtils;
const { setItem, getItem } = asyncLocalStorage;

export default class ImpactGraphs extends Controller {
  static targets = ['category', 'title', 'stats', 'svgBar', 'tooltip'];

  static values = {
    query: String,
  };

  connect() {}
}
