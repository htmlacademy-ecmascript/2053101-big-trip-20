import Presenter from './presenter.js';

/**
 * @extends {Presenter<PlaceholderView, AppModel>}
 */
class PlaceholderPresenter extends Presenter {
  /**
   * @override
   * @return {PlaceholderViewState}
   */
  createViewState() {
    return {
      text: 'Click New Event to create your first point2',
      isHidden: false
    };
  }
}

export default PlaceholderPresenter;
