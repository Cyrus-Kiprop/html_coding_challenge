import { Controller } from 'stimulus';

export default class ImpactGraphs extends Controller {
  static targets = ['category', 'title', 'stats', 'svgBar', 'tooltip'];

  static values = {
    query: String,
  };

  connect() {}
}
