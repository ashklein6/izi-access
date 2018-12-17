const userControls = (state =  { user: {} }, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userControls;
