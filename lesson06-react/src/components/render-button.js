import { updateState, getState } from '../app';

const renderButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Add';

  button.onclick = () => {
    const state = getState();
    updateState({
      items: [...state.items, { name: state.inputValue }],
      inputValue: ''
    });
  };

  return button;
};

export default renderButton;
