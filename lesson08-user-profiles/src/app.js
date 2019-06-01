import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/todo';
import items from './lib/tasks/reducer';
import inputValue from './lib/inputValue/reducer';
import user from './lib/user/reducer';
import { initialiseListeners } from './lib/user/actions';

// custom middleware has 3 stages: first when state is initialised,
// second when middleware is initialised and third when action is dispatched
const customMiddleware = ({ getState, dispatch }) => next => action => {
  const logger = a => console.log(a, getState());
  if (typeof action === 'function') {
    const plainAction = action({ getState, dispatch });
    logger(plainAction);
    next(plainAction);
  } else {
    logger(action);
    next(action);
  }
};

const store = createStore(
  combineReducers({ items, inputValue, user }),
  applyMiddleware(customMiddleware)
);

store.dispatch(initialiseListeners());

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

render(<App />, document.getElementById('app'));
