'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Root from './Root';

// Load SCSS
import '../scss/app.scss';

// Creating store
const store = configureStore();

// Render it to DOM
ReactDOM.render(
  <Provider store={ store }>
      <Root/>
  </Provider>,
  document.getElementById('root')
);
