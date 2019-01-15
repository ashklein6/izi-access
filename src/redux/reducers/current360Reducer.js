const current360 = (state = { loadingDialogOpen: true, info: [{published_status: false, analysis_recommendation_public: false, threesixty_reports_public: false, 
  dashboard_public: false, goals_public: false, demographics_public: false, oral_report_public: false, question_set_public: false, 
  circle_share_public: false, threesixty_freeform_public: false, freeform_public: false, upload_public: false, 
  analysis_recommendation_published: false, threesixty_reports_published: false, dashboard_published: false, goals_published: false,
  demographics_published: false, oral_report_published: false, question_set_published: false, circle_share_published: false,
  threesixty_freeform_published: false, freeform_published: false, upload_published: false}], 
  goalsAssessment: [], dashboard: [], threesixty_reports: [], 
  analysis_recommendation: [], demographics: [], circle_share: [], question_set: [], oral_report: [],
  chart_data: [], clients: [], updateNeeded: { goalsAssessment: false, dashboard: false, threesixty_reports: false, 
  analysis_recommendation: false, demographics: false, circle_share: false, question_set: false, 
  oral_report: false, updateNeeded: false} }, action) => {
    switch (action.type) {
      case 'GENERATE_360_LOADING': 
        return {...state, loadingDialogOpen: true}
      case 'GENERATE_360_LOADED':
        return {...state, loadingDialogOpen: false}
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
      case 'SET_PUBLIC_STATUS':
        return {...state, info: [{
          ...state.info[0],
          [action.payload.field]: action.payload.status
        }]}
      case 'SET_PUBLISH_STATUS':
        return {...state, info: [{
          ...state.info[0],
          [action.payload.field]: action.payload.status
        }]}
      case 'SET_360_SECTION':
        return {...state, [action.payload.section]: action.payload.content};
      case 'SET_360_CLIENTS':
        return {...state, clients: action.payload.content};
      case 'SET_360_INFO':
        return {...state, info: action.payload.content};
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
      case 'SET_CHART_DATA':
        return {...state, chart_data: action.payload};
      default:
        return state;
    }
  };
  
export default current360;
  