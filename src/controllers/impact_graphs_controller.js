import { Controller } from 'stimulus';

export default class ImpactGraphs extends Controller {
  static targets = ['category', 'title', 'stats', 'svgBar', 'tooltip'];

  static values = {
    query: String,
  };

  connect() {}

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
