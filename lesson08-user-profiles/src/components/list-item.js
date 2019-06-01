import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, checkItem } from '../actions';

const ListItem = ({ item, dispatch }) => {
  const onRemoveItem = () => dispatch(removeItem(item));

  const onCheckItem = () => dispatch(checkItem(item));

  return (
    <li
      style={{
        textDecoration: item.done ? 'line-through' : '',
        cursor: 'pointer'
      }}
    >
      <span onClick={onCheckItem}>{item.name}</span>{' '}
      <button onClick={onRemoveItem}>X</button>
    </li>
  );
};

ListItem.propTypes = {
  item: PropsTypes.object,
  dispatch: PropsTypes.func
};

export default connect()(ListItem);
