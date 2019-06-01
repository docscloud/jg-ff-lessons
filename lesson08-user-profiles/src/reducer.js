const initialState = {
  items: [],
  inputValue: 'test',
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_DONE': {
      return { ...state, user: action.user };
    }

    case 'DATA_LOADED': {
      const { data } = action;
      const { items, user } = data || {};
      return {
        ...state,
        items: Object.values(items || {}),
        user
      };
    }
    case 'ON_INPUT_CHANGE': {
      const { inputValue } = action;

      return { ...state, inputValue };
    }
    case 'ADD_TASK_DONE': {
      const { task } = action;
      const { items } = state;

      return {
        ...state,
        items: [...items, task],
        inputValue: ''
      };
    }
    case 'REMOVE_ITEM_DONE': {
      const { item } = action;
      const { items } = state;

      return { ...state, items: items.filter(i => i.id !== item.id) };
    }
    case 'CHECK_ITEM_DONE': {
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
