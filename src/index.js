/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';
import App from './App';
import { loadState, saveState } from './pwa/localStorage';
import * as serviceWorker from './pwa/registerSW';

const persistedState = loadState();
const store = applyMiddleware(reduxPromise)(createStore)(rootReducer, persistedState || {});

window.onbeforeunload = () => {
  saveState(store.getState());
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.register();
