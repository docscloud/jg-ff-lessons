import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/todo';
import reducer from './reducer';
import dbRef from './dbRef';

const store = createStore(
  reducer,
  applyMiddleware(({ getState, dispatch }) => next => action => {
    if (typeof action === 'function') {
      const plainAction = action({ getState, dispatch });
      console.log(plainAction.type, plainAction);
      next(plainAction);
    } else {
      console.log(action.type, action);
      next(action);
    }
  })
);

dbRef
  .once('value')
  .then(data => data.val())
  .then(data => store.dispatch({ type: 'DATA_LOADED', data }));

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

render(<App />, document.getElementById('app'));
