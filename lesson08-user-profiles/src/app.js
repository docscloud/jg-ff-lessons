import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/todo';
import items from './lib/tasks/reducer';
import inputValue from './lib/inputValue/reducer';
import user from './lib/user/reducer';
import dbRef from './dbRef';

const store = createStore(
  combineReducers({ items, inputValue, user }),
  applyMiddleware(({ getState, dispatch }) => next => action => {
    const logger = a => console.log({ action: { ...a }, state: getState() });
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

dbRef
  .once('value')
  .then(data => data.val())
  .then(data => store.dispatch({ type: 'DATA_LOADED', data }));

// child_added listener receives all added childs on items collection
dbRef.child('items').on('child_added', d => {
  const task = d.val();
  store.dispatch({ type: 'ADD_TASK_DONE', task });
});

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

render(<App />, document.getElementById('app'));
