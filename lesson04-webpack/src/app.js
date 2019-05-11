import 'css/app.css';
import renderHeading from './components/render-heading';
import renderList from './components/render-list';
import renderInput from './components/render-input';
import renderButton from './components/render-button';

const state = { items: [{ name: 'Test item from state' }] };

const render = () => {
  const app = document.getElementById('app');

  [renderHeading(), renderList(state), renderInput(), renderButton()].forEach(
    element => app.appendChild(element)
  );
};

render();
