export const onInputChange = e => ({
  type: 'ON_INPUT_CHANGE',
  inputValue: e.currentTarget.value
});

export const addTask = () => ({ type: 'ADD_TASK' });
