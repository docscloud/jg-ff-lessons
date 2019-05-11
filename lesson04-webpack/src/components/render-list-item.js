const renderListItem = ({ name }) => {
  const listItem = document.createElement('li');
  listItem.innerText = name;

  return listItem;
};

export default renderListItem;
