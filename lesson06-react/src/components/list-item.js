import React from 'react';

const ListItem = ({ item, removeItem }) => (
  <li>
    {item.name} <button onClick={removeItem}>X</button>
  </li>
);

export default ListItem;
