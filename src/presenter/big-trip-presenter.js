import { TRIP_EVENT_VIEW_AMOUNT } from '../mock/const';
import { render } from '../render';
import PointEditView from '../view/point-edit-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';

export default class BigTripPresenter {
  #tripEventsContainer = null;
  #pointListComponent = new PointListView();
  #pointListContainer = this.#pointListComponent.getElement();

  constructor(tripEventsContainer) {
    this.#tripEventsContainer = tripEventsContainer;
  }

  init = () => {
    render(this.#pointListComponent, this.#tripEventsContainer);
    render(new PointEditView(), this.#pointListContainer);

    for(let i = 1; i <= TRIP_EVENT_VIEW_AMOUNT; i++) {
      render(new PointView(), this.#pointListContainer);
    }
  };

}
