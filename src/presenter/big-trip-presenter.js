import { TRIP_EVENT_VIEW_AMOUNT } from '../mock/const';
import { render } from '../render';
import PointEditView from '../view/point-edit-view';
import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';

export default class BigTripPresenter {
  constructor(tripEventsContainer) {
    this.tripEventsContainer = tripEventsContainer;
  }

  init = () => {
    render(new PointListView(), this.tripEventsContainer);
    render(new PointEditView(), this.tripEventsContainer);

    for(let i = 1; i <= TRIP_EVENT_VIEW_AMOUNT; i++) {
      render(new PointView(), this.tripEventsContainer);
    }
  };

}
