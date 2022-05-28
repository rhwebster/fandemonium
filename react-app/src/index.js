import React from 'react';
import ReactDOM from 'react-dom';
// import { store, persistor } from './store/configureStore';
// import * as sessionActions from './store/session';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
// import TempApp from './TempApp';

// if (process.env.NODE_ENV !== "production") {

//   window.csrfFetch = fetch;
//   window.store = store;
//   window.sessionActions = sessionActions;
// }

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <ModalProvider > */}
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    {/* </ModalProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
