import RX = require('reactxp');
import App = require('./src/App');

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
