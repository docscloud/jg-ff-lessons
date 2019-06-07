const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOADED': {
      const { data } = action;
      const { items } = data || {};
      return [...Object.values(items || {})];
    }

    case 'ADD_TASK_DONE': {
      const { task } = action;

      return [...state, task];
    }

    case 'REMOVE_ITEM_DONE': {
      const { item } = action;

      return [...state.filter(i => i.id !== item.id)];
    }

    case 'CHECK_ITEM_DONE': {
      const { item } = action;

      return [...state.map(i => (i.id === item.id ? item : i))];
    }

    default:
      return state;
  }
};

export default reducer;
