import renderListItem from './render-list-item';

const renderList = ({ items }) => {
  const list = document.createElement('ul');

  items.forEach(item => {
    list.appendChild(renderListItem(item));
  });

  return list;
};

export default renderList;
