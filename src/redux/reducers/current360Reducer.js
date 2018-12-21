const current360 = (state = {updateNeeded: {goalsAssessment: false}, goalsAssessment: []}, action) => {
    switch (action.type) {
      case 'SET_360_INFO':
        return {...state, info: action.payload};
      case 'CURRENT_360_SECTION_NEEDS_UPDATE':
        return {...state, updateNeeded: {
          ...state.updateNeeded,
          [action.payload.section]: true
        }};
      case 'CURRENT_360_SECTION_UPDATE_COMPLETE':
        return {...state, updateNeeded: {
          ...state.updateNeeded,
          [action.payload.section]: false
        }};
      case 'SET_GOALS':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_DASHBOARD':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_THREESIXTY_REPORTS':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_ANALYSIS_RECOMMENDATION':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_DEMOGRAPHICS':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_CIRCLE_SHARE':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_QUESTION_SET':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_ORAL_REPORT':
        return {...state, [action.payload.section]: action.payload.content};
      default:
        return state;
    }
  };
  
export default current360;
  