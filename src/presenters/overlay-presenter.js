import Presenter from './presenter.js';

/**
 * @extends {Presenter<OverlayView>}
 */
class OverlayPresenter extends Presenter {
  /**
   * @override
   * @return {OverlayViewState}
   */
  createViewState() {
    return {
      isActive: false
    };
  }
}

export default OverlayPresenter;
