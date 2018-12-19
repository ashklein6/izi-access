const current360 = (state = {updateNeeded: false, goalsAssessment: []}, action) => {
    switch (action.type) {
      case 'SET_360':
        return action.payload;
      case 'CURRENT_360_SECTION_NEEDS_UPDATE':
        return {...state, updateNeeded: true};
      case 'CURRENT_360_SECTION_UPDATE_COMPLETE':
        return {...state, updateNeeded: false};
      case 'SET_360_SECTION':
        return {...state, [action.payload.section]: action.payload.content};
      default:
        return state;
    }
  };
  
export default current360;
  