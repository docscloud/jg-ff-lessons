import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Heading from './components/heading';
import List from './components/list';
import reducer from './reducer';
import Input from './components/input';
import Container from './components/container';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <Heading />
    <Container>
      <List />
    </Container>
    <Input />
  </Provider>
);

render(<App />, document.getElementById('app'));
