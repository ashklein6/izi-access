const all360s = (state =  {published: [], unpublished: [] }, action) => {
    switch (action.type) {
      case 'SET_PUBLISHED':
        return  {...state, published: action.payload} ;
      case 'SET_UNPUBLISHED':
        return  {...state, unpublished: action.payload} ;
      default:
        return state;
    }
  };
  
export default all360s;
  