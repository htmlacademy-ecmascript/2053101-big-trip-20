import './views/add-view.js';
import './views/brief-view.js';

/**
 * @type {BriefView}
 */
const brief = document.querySelector('brief-view');
/**
 * @type {AddView}
 */
const addView = document.querySelector('add-view');

brief.render();
addView.render();
