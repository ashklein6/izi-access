import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchAll360s() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets all published 360s
function* fetchPublished() {
  try {
    const response = yield call(axios.get, '/all360/true');
    yield put({type: 'SET_PUBLISHED', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets all unpublished 360s
function* fetchUnpublished() {
  try {
    const response = yield call(axios.get, '/all360/false');
    yield put({type: 'SET_UNPUBLISHED', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// runs a search based on the incoming query, then checks to see
// which property in redux the information belongs to and sets it there
function* fetch360Search(action) {
  try {
    const response = yield call( axios.get, '/all360/search', { params: action.payload } );
    if(action.payload.publishedStatus === 'true'){
      yield put( { type: 'SET_PUBLISHED', payload: response.data } );
    } else {
      yield put( { type: 'SET_UNPUBLISHED', payload: response.data } );
    }
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* all360sSaga() {
  yield takeLatest( 'FETCH_ALL_360s', fetchAll360s );
  yield takeLatest( 'FETCH_PUBLISHED', fetchPublished );
  yield takeLatest( 'FETCH_UNPUBLISHED', fetchUnpublished );
  yield takeLatest( 'FETCH_360_SEARCH', fetch360Search );
};

export default all360sSaga;