import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
import Heading from './components/heading';
import List from './components/list';

const App = () => (
  <div>
    <Heading />
    <List />
  </div>
);

render(<App />, document.getElementById('app'));
