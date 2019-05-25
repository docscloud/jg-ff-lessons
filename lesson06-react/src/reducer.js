import { generate } from 'shortid';

const initialState = {
  items: [{ id: generate(), name: 'Test item', done: false }],
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
        items: [...items, { id: generate(), name: inputValue, done: false }],
        inputValue: ''
      };
    }
    case 'REMOVE_ITEM': {
      const { item } = action;
      const { items } = state;

      return { items: items.filter(i => i.id !== item.id) };
    }
    case 'CHECK_ITEM': {
      const { item } = action;
      const { items } = state;

      return {
        ...state,
        items: items.map(i =>
          i.id === item.id ? { ...item, done: !item.done } : i
        )
      };
    }
    default:
      return state;
  }
};

export default reducer;
