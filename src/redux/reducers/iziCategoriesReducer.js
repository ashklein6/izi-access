const iziCategories = (state = [], action) => {
  switch (action.type) {
    case 'SET_IZI_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

export default iziCategories;
