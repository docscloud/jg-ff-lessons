import 'css/app.css';

const state = {};

const renderHeading = () => {
  const heading = document.createElement('h1');
  heading.innerText = 'Todo List';

  return heading;
};

const renderListItem = () => {
  const listItem = document.createElement('li');
  listItem.innerText = 'Test item';

  return listItem;
};

const renderList = () => {
  const list = document.createElement('ul');

  list.appendChild(renderListItem());

  return list;
};

const renderInput = () => {
  const input = document.createElement('input');
  return input;
};

const renderButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Add';

  return button;
};

const render = () => {
  const app = document.getElementById('app');

  [renderHeading(), renderList(), renderInput(), renderButton()].forEach(
    element => app.appendChild(element)
  );
};

render();
