import { generate } from 'shortid';
import dbRef from './dbRef';

export const onInputChange = e => ({
  type: 'ON_INPUT_CHANGE',
  inputValue: e.currentTarget.value
});

export const addTask = name => ({ dispatch }) => {
  const task = {
    name,
    done: false,
    createdAt: new Date().getTime()
  };

  const id = dbRef
    .child('items')
    .push()
    .getKey();
  console.log('ID', id);
  dbRef
    .update({ [`items/${id}`]: { ...task, id } })
    .then(() => dispatch({ type: 'ADD_TASK_DONE', task: { ...task, id } }))
    .catch(error => dispatch({ type: 'ADD_TASK_ERROR', error }));

  return {
    type: 'ADD_TASK_START'
  };
};

export const checkItem = item => ({ dispatch }) => {
  const updatedItem = {
    ...item,
    done: !item.done,
    updatedAt: new Date().getTime()
  };

  dbRef
    .update({ [`items/${item.id}`]: updatedItem })
    .then(() => dispatch({ type: 'CHECK_ITEM_DONE', item: updatedItem }))
    .catch(error => dispatch({ type: 'CHECK_ITEM_ERROR', error }));

  return {
    type: 'CHECK_ITEM'
  };
};

export const removeItem = item => ({ dispatch }) => {
  dbRef
    .update({
      [`items/${item.id}`]: null,
      lastRomvedAt: new Date().getTime()
    })
    .then(() => dispatch({ type: 'REMOVE_ITEM_DONE', item }))
    .catch(error => dispatch({ type: 'REMOVE_ITEM_ERROR', error }));

  return {
    type: 'REMOVE_ITEM',
    item
  };
};
