import { updateState, getState } from '../app';

const removeOnClick = index => () => {
  const { items } = getState();
  const newItems = items.filter((value, i) => index !== i);
  updateState({ items: newItems });
};

const renderRemoveButton = index => {
  const remove = document.createElement('button');
  remove.innerText = 'X';
  remove.onclick = removeOnClick(index);

  return remove;
};

export default renderRemoveButton;
