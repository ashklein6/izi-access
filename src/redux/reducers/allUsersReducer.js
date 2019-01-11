const allUsers = (state =  { allUsers: [], pendingRequests: [], deactivatedUsers: [], threesixtyUsers: [] }, action) => {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return { ...state, allUsers: action.payload };
    case 'SET_PENDING_REQUESTS':
      return { ...state, pendingRequests: action.payload };
    case 'SET_DEACTIVATED_USERS':
      return { ...state, deactivatedUsers: action.payload };
    case 'SET_THREESIXTY_USERS':
      return { ...state, threesixtyUsers: action.payload };
    default:
      return state;
  }
};

export default allUsers;
