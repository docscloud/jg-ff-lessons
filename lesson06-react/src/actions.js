export const onInputChange = e => ({
  type: 'ON_INPUT_CHANGE',
  inputValue: e.currentTarget.value
});

export const addTask = () => ({ type: 'ADD_TASK' });

export const checkItem = item => ({
  type: 'CHECK_ITEM',
  item
});

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item
});
