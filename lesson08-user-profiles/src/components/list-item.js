import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask, checkTask } from '../lib/tasks/actions';

const ListItem = ({ item, dispatch }) => {
  const onRemoveItem = () => dispatch(removeTask(item));

  const onCheckItem = () => dispatch(checkTask(item));

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
