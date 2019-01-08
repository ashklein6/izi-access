import axios from 'axios';
import { all, put, call, takeLatest } from 'redux-saga/effects';

function* changePrivateStatus(action) {
  try {
    yield call(axios.put, `//${action.payload.id}`, {data: action.payload.status} );
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* changePublishStatus(action) {
  try {
    yield call(axios.put, `//${action.payload.id}`, {data: action.payload.status} );
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* create360Complete(action) {
  try {
    const response = yield call(axios.post, '/current360/complete', {data: action.payload} );
    yield console.log('response is! ', response.data.id);
    yield put({ type: 'FETCH_360', payload: response.data.id });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* create360Lowdown(action) {
  try {
    const response = yield call(axios.post, '/current360/lowdown', {data: action.payload} );
    yield put({ type: 'FETCH_360', payload: response.data.id });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* delete360(action) {
  try {
    yield call(axios.delete, `//${action.payload}` )
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* edit360(action) {
  console.log('inside edit360. action.payload:', action.payload);
  console.log('url:','current360/edit/'+action.payload.section);
  try {
    yield call(axios.put, `/current360/edit/${action.payload.section}`, {data: action.payload.data} );
  } 
  catch (error) {
    console.log('error', error);
  }
};

// dispatches actions to fetch each of the 360 sections. (expects current360Id)
function* fetch360(action) {
  console.log('inside fetch360. action.payload:', action.payload);
  try {
    // Get all sections of the 360
    yield all ([
      put({ type: 'FETCH_GOALS', payload: action.payload }),
      put({ type: 'FETCH_DASHBOARD', payload: action.payload }),
      put({ type: 'FETCH_THREESIXTY_REPORTS', payload: action.payload }),
      put({ type: 'FETCH_ANALYSIS_RECOMMENDATION', payload: action.payload }),
      put({ type: 'FETCH_DEMOGRAPHIC', payload: action.payload }),
      put({ type: 'FETCH_CIRCLE_SHARE', payload: action.payload }),
      put({ type: 'FETCH_QUESTION_SET', payload: action.payload }),
      put({ type: 'FETCH_ORAL_REPORT', payload: action.payload }),
    ]);
  } 
  catch (error) {
    console.log('error', error);
  }
};

// general worker saga. expect an action.payload with section and current360Id
function* fetch360Section(action) {
  console.log('inside fetch360Section in saga');
  try {
    const response = yield call(axios.get, `/current360/section`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_360_SECTION', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchGoals(action) {
  console.log('inside fetchGoals in saga');
  try {
    const response = yield call(axios.get, `/current360/goalsAssessment`, {params: action.payload});
    console.log('response for goalsAssessment', response.data);
    yield put({ type: 'SET_GOALS', payload: { content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'goalsAssessment'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDashboard(action) {
  console.log('inside fetchDashboard in saga');
  try {
    const response = yield call(axios.get, `/current360/dashboard`, {params: action.payload});
    console.log('response for dashboard', response);
    yield put({ type: 'SET_DASHBOARD', payload: {section: 'dashboard', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'dashboard'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchThreeSixtyReports(action) {
  console.log('inside fetchThreeSixtyReports in saga');
  try {
    const response = yield call(axios.get, `/current360/threesixty_reports`, {params: action.payload});
    console.log('response for threesixty_reports', response);
    yield put({ type: 'SET_THREESIXTY_REPORTS', payload: {section: 'threesixty_reports', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'threesixty_reports'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchAnalysisRecommendation(action) {
  console.log('inside fetchAnalysisRecommendation in saga');
  try {
    const response = yield call(axios.get, `/current360/analysis_recommendation`, {params: action.payload});
    console.log('response for analysis_recommendation', response);
    yield put({ type: 'SET_ANALYSIS_RECOMMENDATION', payload: {section: 'analysis_recommendation', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'analysis_recommendation'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDemographics(action) {
  console.log('inside fetchDemographics in saga');
  try {
    const response = yield call(axios.get, `/current360/demographics`, {params: action.payload});
    console.log('response for demographics', response);
    yield put({ type: 'SET_DEMOGRAPHICS', payload: {section: 'demographics', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'demographics'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchCircleShare(action) {
  console.log('inside fetchCircleShare in saga');
  try {
    const response = yield call(axios.get, `/current360/circle_share`, {params: action.payload});
    console.log('response for circle_share', response);
    yield put({ type: 'SET_CIRCLE_SHARE', payload: {section: 'circle_share', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'circle_share'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchQuestionSet(action) {
  console.log('inside fetchQuestionSet in saga');
  try {
    const response = yield call(axios.get, `/current360/question_set`, {params: action.payload});
    console.log('response for question_set', response);
    yield put({ type: 'SET_QUESTION_SET', payload: {section: 'question_set', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'question_set'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchOralReport(action) {
  console.log('inside fetchOralReport in saga');
  try {
    const response = yield call(axios.get, `/current360/oral_report`, {params: action.payload});
    console.log('response for oral_report', response);
    yield put({ type: 'SET_ORAL_REPORT', payload: {section: 'oral_report', content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: 'oral_report'} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* current360Saga() {
  yield takeLatest( 'CHANGE_PRIVATE_STATUS', changePrivateStatus );
  yield takeLatest( 'CHANGE_PUBLISH_STATUS', changePublishStatus );
  yield takeLatest( 'CREATE_360_COMPLETE', create360Complete );
  yield takeLatest( 'CREATE_360_LOWDOWN', create360Lowdown );
  yield takeLatest( 'DELETE_360', delete360 );
  yield takeLatest( 'EDIT_360', edit360 );
  yield takeLatest( 'FETCH_360', fetch360 );
  yield takeLatest( 'FETCH_360_SECTION', fetch360Section);
  yield takeLatest( 'FETCH_GOALS', fetchGoals );
  yield takeLatest( 'FETCH_DASHBOARD', fetchDashboard );
  yield takeLatest( 'FETCH_THREESIXTY_REPORTS', fetchThreeSixtyReports );
  yield takeLatest( 'FETCH_ANALYSIS_RECOMMENDATION', fetchAnalysisRecommendation );
  yield takeLatest( 'FETCH_DEMOGRAPHIC', fetchDemographics );
  yield takeLatest( 'FETCH_CIRCLE_SHARE', fetchCircleShare );
  yield takeLatest( 'FETCH_QUESTION_SET', fetchQuestionSet );
  yield takeLatest( 'FETCH_ORAL_REPORT', fetchOralReport );
};

export default current360Saga;