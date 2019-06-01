import dbRef from '../../dbRef';

export const addTask = function(name) {
  return function({ dispatch, getState }) {
    const { uid } = getState().user;
    const task = {
      name,
      done: false,
      createdAt: new Date().getTime()
    };

    const id = dbRef
      .child(`${uid}/items`)
      .push()
      .getKey();

    dbRef
      .update({ [`${uid}/items/${id}`]: { ...task, id } })
      .catch(error => dispatch({ type: 'ADD_TASK_ERROR', error }));

    return {
      type: 'ADD_TASK_START'
    };
  };
};

export const checkTask = item => ({ dispatch, getState }) => {
  const { uid } = getState().user;
  const updatedItem = {
    ...item,
    done: !item.done,
    updatedAt: new Date().getTime()
  };

  dbRef
    .update({ [`${uid}/items/${item.id}`]: updatedItem })
    .then(() => dispatch({ type: 'CHECK_ITEM_DONE', item: updatedItem }))
    .catch(error => dispatch({ type: 'CHECK_ITEM_ERROR', error }));

  return {
    type: 'CHECK_ITEM'
  };
};

export const removeTask = item => ({ dispatch, getState }) => {
  const { uid } = getState().user;
  dbRef
    .update({
      [`${uid}/items/${item.id}`]: null,
      lastRomvedAt: new Date().getTime()
    })
    .then(() => dispatch({ type: 'REMOVE_ITEM_DONE', item }))
    .catch(error => dispatch({ type: 'REMOVE_ITEM_ERROR', error }));

  return {
    type: 'REMOVE_ITEM',
    item
  };
};
