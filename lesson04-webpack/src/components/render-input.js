import { getState, updateState } from '../app';

const onInput = e => {
  console.log('INPUT', e.currentTarget.value);
  updateState({ inputValue: e.currentTarget.value });
};

const renderInput = () => {
  const input = document.createElement('input');
  input.oninput = onInput;

  const state = getState();
  input.value = state.inputValue;

  return input;
};

export default renderInput;
