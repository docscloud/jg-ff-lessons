import renderRemoveButton from './render-remove-button';

const renderListItem = ({ name }, index) => {
  const listItem = document.createElement('li');
  listItem.innerText = name;

  listItem.appendChild(renderRemoveButton(index));

  return listItem;
};

export default renderListItem;
