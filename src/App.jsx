import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import rootReducer from './reducers';
import { loadState, saveState } from './pwa/localStorage';
import Routes from './routes';

import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';

const persistedState = loadState();
const store = applyMiddleware(reduxPromise)(createStore)(rootReducer, persistedState || {});

window.onbeforeunload = () => {
  saveState(store.getState());
};

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
