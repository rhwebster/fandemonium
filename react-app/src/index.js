import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import * as sessionActions from './store/session';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider >
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
