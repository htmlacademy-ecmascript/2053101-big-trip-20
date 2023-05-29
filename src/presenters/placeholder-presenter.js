import Presenter from './presenter.js';

/**
 * @extends {Presenter<PlaceholderView, AppModel>}
 */
class PlaceholderPresenter extends Presenter {
  constructor() {
    super(...arguments);


  }

  /**
   * @type {Record<FilterType, string>}
   */
  textMap = {
    everything: 'Click New Event to create your first point',
    future: 'There are no future events now',
    present: 'There are no present events now',
    past: 'There are no past events now'
  };

  /**
   * @override
   * @return {PlaceholderViewState}
   */
  createViewState() {
    console.log(this.textMap);
    return {
      text: 'Click New Event to create your first point2',
      isHidden: false
    };
  }
}

export default PlaceholderPresenter;
