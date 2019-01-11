const current360 = (state = { goalsAssessment: [], dashboard: [], threesixty_reports: [], 
  analysis_recommendation: [], demographics: [], circle_share: [], question_set: [], oral_report: [], 
  updateNeeded: { goalsAssessment: false, dashboard: false, threesixty_reports: false, 
  analysis_recommendation: false, demographics: false, circle_share: false, question_set: false, 
  oral_report: false, updateNeeded: false} }, action) => {
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
        return {...state, goalsAssessment: action.payload.content};
      case 'SET_DASHBOARD':
        return {...state, dashboard: action.payload.content};
      case 'SET_THREESIXTY_REPORTS':
        return {...state, threesixty_reports: action.payload.content};
      case 'SET_ANALYSIS_RECOMMENDATION':
        return {...state, analysis_recommendation: action.payload.content};
      case 'SET_DEMOGRAPHICS':
        return {...state, demographics: action.payload.content};
      case 'SET_CIRCLE_SHARE':
        return {...state, circle_share: action.payload.content};
      case 'SET_QUESTION_SET':
        return {...state, question_set: action.payload.content};
      case 'SET_ORAL_REPORT':
        return {...state, oral_report: action.payload.content};
      default:
        return state;
    }
  };
  
export default current360;
  