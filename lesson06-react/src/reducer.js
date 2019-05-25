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
    default:
      return state;
  }
};

export default reducer;
