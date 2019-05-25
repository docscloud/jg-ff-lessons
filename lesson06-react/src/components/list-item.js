import React from 'react';

const ListItem = ({ item, removeItem, checkItem }) => (
  <li
    onClick={checkItem}
    style={{
      textDecoration: item.done ? 'line-through' : '',
      cursor: 'pointer'
    }}
  >
    {item.name} <button onClick={removeItem}>X</button>
  </li>
);

export default ListItem;
