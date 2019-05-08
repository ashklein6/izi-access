import axios from 'axios';
import { all, put, call, take, takeLatest } from 'redux-saga/effects';

function* changePublicStatus(action) {
  try {
    yield call(axios.put, `current360/public/${action.payload.current360Id}`, action.payload );
    yield put({ type: 'SET_PUBLIC_STATUS', payload: action.payload });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* changePublishStatus(action) {
  try {
    yield call(axios.put, `current360/publish/${action.payload.current360Id}`, action.payload );
    yield put({ type: 'SET_PUBLISH_STATUS', payload: action.payload });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* create360Complete(action) {
  try {
    const response = yield call(axios.post, '/current360/complete', {data: action.payload} );
    yield put({ type: 'FETCH_360', payload: {current360Id: response.data.id} });
    yield put({ type: 'FETCH_PUBLISHED' });
    yield put({ type: 'FETCH_UNPUBLISHED' });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* create360Lowdown(action) {
  try {
    const response = yield call(axios.post, '/current360/lowdown', {data: action.payload} );
    yield put({ type: 'FETCH_360', payload: {current360Id: response.data.id} });
    yield put({ type: 'FETCH_PUBLISHED' });
    yield put({ type: 'FETCH_UNPUBLISHED' });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* edit360(action) {
  try {
    yield call(axios.put, `/current360/edit/${action.payload.section}/${action.payload.current360Id}`, action.payload.data );
    yield put({ type: 'FETCH_360_SECTION', payload: action.payload })
  } 
  catch (error) {
    console.log('error', error);
  }
};

// dispatches actions to fetch each of the 360 sections. (expects current360Id)
function* fetch360(action) {
  try {
    yield put({ type: 'GENERATE_360_LOADING' })
    // Get all sections of the 360
    yield all ([
      put({ type: 'FETCH_360_INFO', payload: action.payload }),
      put({ type: 'FETCH_GOALS', payload: action.payload }),
      put({ type: 'FETCH_DASHBOARD', payload: action.payload }),
      put({ type: 'FETCH_THREESIXTY_REPORTS', payload: action.payload }),
      put({ type: 'FETCH_ANALYSIS_RECOMMENDATION', payload: action.payload }),
      put({ type: 'FETCH_DEMOGRAPHIC', payload: action.payload }),
      put({ type: 'FETCH_CIRCLE_SHARE', payload: action.payload }),
      put({ type: 'FETCH_QUESTION_SET', payload: action.payload }),
      put({ type: 'FETCH_ORAL_REPORT', payload: action.payload }),
      put({ type: 'FETCH_FREEFORM', payload: action.payload }),
      put({ type: 'FETCH_CHART_DATA', payload: action.payload }),
    ]);
    yield take(['SET_GOALS', 'SET_DASHBOARD', 'SET_THREESIXTY_REPORTS', 'SET_ANALYSIS_RECOMMENDATION',
      'SET_DEMOGRAPHIC', 'SET_CIRCLE_SHARE', 'SET_QUESTION_SET', 'SET_ORAL_REPORT', 'SET_FREEFORM', 'SET_CHART_DATA'])
    yield put({ type: 'GENERATE_360_LOADED' })
  } 
  catch (error) {
    console.log('error', error);
  }
};

// general worker saga to fetch clients with access to a specific 360.
// expect an action.payload with current360Id
function* fetch360Clients(action) {
  try {
    const response = yield call(axios.get, `/current360/clients/${action.payload.current360Id}`);
    yield put({ type: 'SET_360_CLIENTS', payload: {section: action.payload.section, content: response.data} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

// general worker saga. expect an action.payload with section and current360Id
function* fetch360Info(action) {
  try {
    const response = yield call(axios.get, `/current360/info`, {params: action.payload});
    yield put({ type: 'SET_360_INFO', payload: {section: action.payload.section, content: response.data} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

// general worker saga. expect an action.payload with section and current360Id
function* fetch360Section(action) {
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: {current360Id: action.payload.current360Id}});
    yield put({ type: 'SET_360_SECTION', payload: {section: action.payload.section, content: response.data} });
    if (action.payload.section === 'demographics') {
      const gen_cat = yield call(axios.get, `current360/demographics/gen_cat`)
      yield put({ type: 'SET_GEN_CAT', payload: gen_cat.data })
      const ethnic_cat = yield call(axios.get, `current360/demographics/ethnic_cat`)
      yield put({ type: 'SET_ETHNIC_CAT', payload: ethnic_cat.data })
    }
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchGoals(action) {
  try {
    const response = yield call(axios.get, `/current360/goalsAssessment`, {params: action.payload});
    yield put({ type: 'SET_GOALS', payload: { content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'goalsAssessment'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDashboard(action) {
  try {
    const response = yield call(axios.get, `/current360/dashboard`, {params: action.payload});
    yield put({ type: 'SET_DASHBOARD', payload: {section: 'dashboard', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'dashboard'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchThreeSixtyReports(action) {
  try {
    const response = yield call(axios.get, `/current360/threesixty_reports`, {params: action.payload});
    yield put({ type: 'SET_THREESIXTY_REPORTS', payload: {section: 'threesixty_reports', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'threesixty_reports'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchAnalysisRecommendation(action) {
  try {
    const response = yield call(axios.get, `/current360/analysis_recommendation`, {params: action.payload});
    yield put({ type: 'SET_ANALYSIS_RECOMMENDATION', payload: {section: 'analysis_recommendation', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'analysis_recommendation'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDemographics(action) {
  try {
    const response = yield call(axios.get, `/current360/demographics`, {params: action.payload});
    yield put({ type: 'SET_DEMOGRAPHICS', payload: {section: 'demographics', content: response.data} });
    const gen_cat = yield call(axios.get, `current360/demographics/gen_cat`)
    yield put({ type: 'SET_GEN_CAT', payload: gen_cat.data })
    const ethnic_cat = yield call(axios.get, `current360/demographics/ethnic_cat`)
    yield put({ type: 'SET_ETHNIC_CAT', payload: ethnic_cat.data })
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'demographics'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchCircleShare(action) {
  try {
    const response = yield call(axios.get, `/current360/circle_share`, {params: action.payload});
    yield put({ type: 'SET_CIRCLE_SHARE', payload: {section: 'circle_share', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'circle_share'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchQuestionSet(action) {
  try {
    const response = yield call(axios.get, `/current360/question_set`, {params: action.payload});
    yield put({ type: 'SET_QUESTION_SET', payload: {section: 'question_set', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'question_set'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchOralReport(action) {
  try {
    const response = yield call(axios.get, `/current360/oral_report`, {params: action.payload});
    yield put({ type: 'SET_ORAL_REPORT', payload: {section: 'oral_report', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'oral_report'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchFreeform(action) {
  try {
    const response = yield call(axios.get, `/current360/freeform`, {params: action.payload});
    yield put({ type: 'SET_FREEFORM', payload: {section: 'freeform', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'freeform'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

// gets data for charts displayed in 360 report
function* fetchChartData(action) {
  try {
    const response = yield call(axios.get, `/current360/chart_data`, {params: action.payload});
    yield put({ type: 'SET_CHART_DATA', payload: response.data} );
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* current360Saga() {
  yield takeLatest( 'CHANGE_PUBLIC_STATUS', changePublicStatus );
  yield takeLatest( 'CHANGE_PUBLISH_STATUS', changePublishStatus );
  yield takeLatest( 'CREATE_360_COMPLETE', create360Complete );
  yield takeLatest( 'CREATE_360_LOWDOWN', create360Lowdown );
  yield takeLatest( 'EDIT_360', edit360 );
  yield takeLatest( 'FETCH_360', fetch360 );
  yield takeLatest( 'FETCH_360_CLIENTS', fetch360Clients);
  yield takeLatest( 'FETCH_360_INFO', fetch360Info);
  yield takeLatest( 'FETCH_360_SECTION', fetch360Section);
  yield takeLatest( 'FETCH_GOALS', fetchGoals );
  yield takeLatest( 'FETCH_DASHBOARD', fetchDashboard );
  yield takeLatest( 'FETCH_THREESIXTY_REPORTS', fetchThreeSixtyReports );
  yield takeLatest( 'FETCH_ANALYSIS_RECOMMENDATION', fetchAnalysisRecommendation );
  yield takeLatest( 'FETCH_DEMOGRAPHIC', fetchDemographics );
  yield takeLatest( 'FETCH_CIRCLE_SHARE', fetchCircleShare );
  yield takeLatest( 'FETCH_QUESTION_SET', fetchQuestionSet );
  yield takeLatest( 'FETCH_ORAL_REPORT', fetchOralReport );
  yield takeLatest( 'FETCH_FREEFORM', fetchFreeform );
  yield takeLatest( 'FETCH_CHART_DATA', fetchChartData );
};

export default current360Saga;