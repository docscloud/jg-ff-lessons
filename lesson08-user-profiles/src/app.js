import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import Todo from './components/todo';
import items from './lib/tasks/reducer';
import inputValue from './lib/inputValue/reducer';
import user from './lib/user/reducer';
import dbRef from './dbRef';
import { loadData } from './lib/user/actions';

const store = createStore(
  combineReducers({ items, inputValue, user }),
  applyMiddleware(({ getState, dispatch }) => next => action => {
    const logger = a => console.log(a, getState());
    if (typeof action === 'function') {
      const plainAction = action({ getState, dispatch });
      logger(plainAction);
      next(plainAction);
    } else {
      logger(action);
      next(action);
    }
  })
);

store.dispatch(loadData());

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

render(<App />, document.getElementById('app'));
