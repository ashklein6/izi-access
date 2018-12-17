const allUsers = (state =  { allUsers: [], pendingRequests: [], deactivatedUsers: [] }, action) => {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return { ...state, allUsers: action.payload };
    case 'SET_PENDING_REQUESTS':
      return { ...state, pendingRequests: action.payload };
    case 'SET_DEACTIVATED_USERS':
      return { ...state, deactivatedUsers: action.payload };
    default:
      return state;
  }
};

export default allUsers;
