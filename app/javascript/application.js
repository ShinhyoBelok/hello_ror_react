// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeter from './components/Greeter';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Greeter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);