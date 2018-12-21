import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

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

function* create360(action) {
  try {
    const response = yield call(axios.post, '/', {data: action.payload} );
    yield put({ type: 'FETCH_360', payload: response });
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

function* fetch360(action) {
  console.log('inside fetch360. action.payload:', action.payload);
  try {
    const response = yield call(axios.get, `/current360/${action.payload}`);
    yield put({ type: 'SET_360_INFO', payload: response });
  } 
  catch (error) {
    console.log('error', error);
  }
};

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
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_GOALS', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDashboard(action) {
  console.log('inside fetchDashboard in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_DASHBOARD', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchThreeSixtyReports(action) {
  console.log('inside fetchThreeSixtyReports in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_THREESIXTY_REPORTS', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchAnalysisRecommendation(action) {
  console.log('inside fetchAnalysisRecommendation in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_ANALYSIS_RECOMMENDATION', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchDemographics(action) {
  console.log('inside fetchDemographics in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_DEMOGRAPHICS', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}

function* fetchCircleShare(action) {
  console.log('inside fetchCircleShare in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_CIRCLE_SHARE', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchQuestionSet(action) {
  console.log('inside fetchQuestionSet in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_QUESTION_SET', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* fetchOralReport(action) {
  console.log('inside fetchOralReport in saga');
  try {
    const response = yield call(axios.get, `/current360/${action.payload.section}`, {params: action.payload});
    console.log('response for', action.payload.section, response);
    yield put({ type: 'SET_ORAL_REPORT', payload: {section: action.payload.section, content: response.data} });
    yield put({ type: 'CURRENT_360_SECTION_NEEDS_UPDATE', payload: {section: action.payload.section} });
  } 
  catch (error) {
    console.log('error', error);
  }
}


function* current360Saga() {
  yield takeLatest( 'CHANGE_PRIVATE_STATUS', changePrivateStatus );
  yield takeLatest( 'CHANGE_PUBLISH_STATUS', changePublishStatus );
  yield takeLatest( 'CREATE_360', create360 );
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