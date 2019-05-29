import { generate } from 'shortid';
import dbRef from './dbRef';

export const onInputChange = e => ({
  type: 'ON_INPUT_CHANGE',
  inputValue: e.currentTarget.value
});

export const addTask = name => ({ dispatch }) => {
  const task = { id: generate(), name, done: false };

  dbRef
    .update({ [`items/${task.id}/`]: task })
    .then(() => dispatch({ type: 'ADD_TASK_DONE', task }))
    .catch(error => dispatch({ type: 'ADD_TASK_ERROR', error }));

  return {
    type: 'ADD_TASK_START'
  };
};

export const checkItem = item => {
  const updatedItem = { ...item, done: !item.done };
  dbRef.update({ [`items/${item.id}`]: updatedItem });

  return {
    type: 'CHECK_ITEM',
    item: updatedItem
  };
};

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item
});
