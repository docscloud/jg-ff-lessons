const initialState = {
  items: [{ name: 'Test item', done: false }],
  inputValue: 'test'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE': {
      const { inputValue } = action;
      return { ...state, inputValue };
    }
    case 'ADD_TASK': {
      const { items, inputValue } = state;
      return {
        items: [...items, { name: inputValue, done: false }],
        inputValue: ''
      };
    }
    default:
      return state;
  }
};

export default reducer;
