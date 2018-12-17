const current360 = (state = {}, action) => {
    switch (action.type) {
      case 'SET_360':
        return action.payload;
      default:
        return state;
    }
  };
  
export default current360;
  