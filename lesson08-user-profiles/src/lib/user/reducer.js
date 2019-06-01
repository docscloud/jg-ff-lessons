const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_DONE': {
      return { ...action.user };
    }

    case 'DATA_LOADED': {
      const { data } = action;
      const { user } = data || {};
      return {
        ...user
      };
    }

    default:
      return state;
  }
};

export default userReducer;
