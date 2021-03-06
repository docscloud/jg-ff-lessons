import { generate } from 'shortid';

const initialState = {
  items: [{ id: generate(), name: 'Test item', done: false }],
  inputValue: 'test'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOADED': {
      const { data } = action;
      return { ...state, items: data ? Object.values(data.items) : [] };
    }
    case 'ON_INPUT_CHANGE': {
      const { inputValue } = action;

      return { ...state, inputValue };
    }
    case 'ADD_TASK': {
      const { task } = action;
      const { items } = state;

      return {
        items: [...items, task],
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
        items: items.map(i => (i.id === item.id ? item : i))
      };
    }
    default:
      return state;
  }
};

export default reducer;
