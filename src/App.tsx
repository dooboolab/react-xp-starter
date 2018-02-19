/*
* This file demonstrates a basic ReactXP app.
*/
// This example uses ExperimentalNavigation on iOS and Android
import Navigator, {
  Types, NavigatorDelegateSelector as DelegateSelector,
} from 'reactxp-navigation';

import RX = require('reactxp');
import {
  Styles,
  Component,
} from 'reactxp';

import Main = require('./components/screen/Main');

enum NavigationRouteId {
  Main,
}

const styles = {
  // Standard navigator style should be an object. So we have to disable caching here.
  navCardStyle: Styles.createViewStyle({
    backgroundColor: '#f5fcff'
  }, false),
};

class App extends Component<{}, null> {
  private _navigator: Navigator;

  componentDidMount() {
    this._navigator.immediatelyResetRouteStack([{
      routeId: NavigationRouteId.Main,
      sceneConfigType: Types.NavigatorSceneConfigType.Fade
    }]);
  }

  render() {
    return (
      <Navigator
        ref={ this._onNavigatorRef }
        renderScene={ this._renderScene }
        cardStyle={ styles.navCardStyle }
        delegateSelector={ DelegateSelector }
      />
    );
  }

  private _onNavigatorRef = (navigator: Navigator) => {
    this._navigator = navigator;
  }

  private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
    switch (navigatorRoute.routeId) {
      case NavigationRouteId.Main:
        return <Main onPressNavigate={ this._onPressNavigate } />;
    }

    return null;
  }

  private _onPressNavigate = () => {
    this._navigator.push({
      routeId: NavigationRouteId.Main,
      sceneConfigType: Types.NavigatorSceneConfigType.FloatFromRight
    });
  }

  private _onPressBack = () => {
    this._navigator.pop();
  }
}

export = App;
