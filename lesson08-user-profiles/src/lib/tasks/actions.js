import dbRef from '../../dbRef';

export const addTask = name => ({ dispatch }) => {
  const task = {
    name,
    done: false,
    createdAt: new Date().getTime()
  };

  dbRef
    .child('items')
    .push(task)
    .catch(error => dispatch({ type: 'ADD_TASK_ERROR', error }));

  return {
    type: 'ADD_TASK_START'
  };
};

export const checkTask = item => ({ dispatch }) => {
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

export const removeTask = item => ({ dispatch }) => {
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
