const userAccessLevel = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACCESS_LEVELS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userAccessLevel;
