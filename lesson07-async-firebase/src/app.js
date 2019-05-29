import 'css/app.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Heading from './components/heading';
import List from './components/list';
import reducer from './reducer';
import Input from './components/input';
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
  const [display, setDisplay] = useState(true);

  return (
    <Provider store={store}>
      <Heading onClick={() => setDisplay(!display)} />
      {display ? (
        <List />
      ) : (
        <p
          style={{
            height: 30,
            margin: 20,
            fontSize: 16,
            backgroundColor: 'lightblue',
            textAlign: 'center'
          }}
        >
          OOOPS
        </p>
      )}

      <Input />
    </Provider>
  );
};

render(<App />, document.getElementById('app'));
