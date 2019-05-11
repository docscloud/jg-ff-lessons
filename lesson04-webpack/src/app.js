import 'css/app.css';
import renderHeading from './components/render-heading';
import renderList from './components/render-list';
import renderInput from './components/render-input';
import renderButton from './components/render-button';

let state = { items: [], inputValue: '' };
export const getState = () => state;
export const updateState = newState => {
  state = { ...state, ...newState };
  render();
};

const render = () => {
  console.log('RENDER', state);
  const app = document.getElementById('app');
  app.innerHTML = '';

  const input = renderInput();

  [renderHeading(), renderList(), input, renderButton()].forEach(element =>
    app.appendChild(element)
  );

  input.focus();
};

render();
