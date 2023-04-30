import './views/add-view.js';
import './views/brief-view.js';
import './views/filter-view.js';
import './views/sort-view.js';
/**
 * @type {BriefView}
 */
const brief = document.querySelector('brief-view');
/**
 * @type {AddView}
 */
const addView = document.querySelector('add-view');
/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');
/**
 * @type {SortView}
 */
const sortView = document.querySelector('sort-view');

brief.render();
addView.render();
filterView.render();
sortView.render();
