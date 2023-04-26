import BigTripPresenter from './presenter/big-trip-presenter';
import { render } from './render';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const bigTripPresenter = new BigTripPresenter(tripEventsContainer);

render(new FilterView(), filterContainer);
render(new SortView(), tripEventsContainer);
bigTripPresenter.init();

