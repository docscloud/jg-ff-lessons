import 'css/app.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import renderHeading from './components/render-heading';
import renderList from './components/render-list';
import renderInput from './components/render-input';
import renderButton from './components/render-button';

let state = { items: [{ name: 'Test item' }], inputValue: '' };

class App extends Component {
  render() {
    return <div>Proverka svjazi</div>;
  }
}

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
