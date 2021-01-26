import { Controller } from 'stimulus';

import uiUtils from '../utils/ui_utils';
import mockApiRequest from '../api/mockApiRequest';
import asyncLocalStorage from '../utils/asyncLocalStorage';

const { drawBars, renderDropdownItems } = uiUtils;
const { setItem, getItem } = asyncLocalStorage;

export default class ImpactGraphs extends Controller {
  static targets = ['category', 'title', 'stats', 'svgBar', 'tooltip'];

  static values = {
    query: String,
  };

  connect() {
    mockApiRequest()
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        response.json().then((result) => {
          // clear the localStorage for stale data
          localStorage.removeItem('data');

          // render dropdown items
          renderDropdownItems(Object.keys(result.impacts), this.categoryTarget);

          // cache the data on the local storage to avoid multiple requests to the server
          setItem('data', JSON.stringify(result)).then(() => {
            return getItem('data').then((data) => {
              // render the bar graph based on the default filter query
              const initailQuery = Object.keys(JSON.parse(data).impacts)[0];
              this.updateUserInterface(initailQuery);
            });
          });
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  // handler functions  && eventListeners
  handleBarMouseover(event) {
    const target = event.target;
    const index = Number(target.getAttribute('id'));
    this.tooltipTargets[index].style.display = 'block';
  }

  handleBarMouseleave(event) {
    const target = event.target;
    const index = Number(target.getAttribute('id'));
    this.tooltipTargets[index].style.display = 'none';
  }

  handleFilter(event) {
    this.updateUserInterface(event.target.value);
  }

  // Dom update logic
  updateUserInterface(query) {
    let filteredData = {};
    getItem('data').then((data) => {
      const result = JSON.parse(data).impacts;
      drawBars(result[query], this.tooltipTargets, this.svgBarTargets);
    });
  }
}
