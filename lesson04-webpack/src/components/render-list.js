import renderListItem from './render-list-item';
import { getState } from '../app';

const renderList = () => {
  const { items } = getState();
  const list = document.createElement('ul');

  items.forEach((item, index) => {
    list.appendChild(renderListItem(item, index));
  });

  return list;
};

export default renderList;
