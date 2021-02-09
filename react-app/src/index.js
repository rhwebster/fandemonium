import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import * as sessionActions from './store/session';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
