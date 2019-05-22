import 'css/app.css';
import React from 'react';
import { render } from 'react-dom';
// import renderHeading from './components/render-heading';
// import renderList from './components/render-list';
// import renderInput from './components/render-input';
// import renderButton from './components/render-button';
import Heading from './components/heading';
import List from './components/list';

// let state = { items: [{ name: 'Test item' }], inputValue: '' };

const App = () => (
  <div>
    <Heading />
    <List />
  </div>
);

render(<App />, document.getElementById('app'));
// export const getState = () => state;
// export const updateState = newState => {
//   state = { ...state, ...newState };
//   render();
// };

// const render = () => {
//   // console.log('RENDER', state);
//   const app = document.getElementById('app');
//   app.innerHTML = '';

//   const input = renderInput();

//   [renderHeading(), renderList(), input, renderButton()].forEach(element =>
//     app.appendChild(element)
//   );

//   input.focus();
// };

// render();
