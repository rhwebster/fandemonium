import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import * as sessionActions from './store/session';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
