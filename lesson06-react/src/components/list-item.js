import React from 'react';

const ListItem = ({ item, removeItem, checkItem }) => (
  <li
    style={{
      textDecoration: item.done ? 'line-through' : '',
      cursor: 'pointer'
    }}
  >
    <span onClick={checkItem}>{item.name}</span>{' '}
    <button onClick={removeItem}>X</button>
  </li>
);

export default ListItem;
