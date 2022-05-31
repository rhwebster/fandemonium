import React from 'react';
import ReactDOM from 'react-dom';
// import { store, persistor } from './store/configureStore';
import * as sessionActions from './store/session';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
// import TempApp from './TempApp';

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
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
