const initialState = 'test';

const inputValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return action.inputValue;
    default:
      return state;
  }
};

export default inputValueReducer;
