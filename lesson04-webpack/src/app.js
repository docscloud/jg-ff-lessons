import 'css/app.css';

const state = {};

const renderHeading = () => {
  const heading = document.createElement('h1');
  heading.innerText = 'Todo List';

  return heading;
};

const render = () => {
  const app = document.getElementById('app');

  app.appendChild(renderHeading());

  const list = document.createElement('ul');
  app.appendChild(list);

  const listItem = document.createElement('li');
  listItem.innerText = 'Test item';
  list.appendChild(listItem);
};

render();
