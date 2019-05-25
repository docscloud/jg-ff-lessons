const initialState = {
  items: [{ name: 'Test item', done: false }],
  inputValue: 'test'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
