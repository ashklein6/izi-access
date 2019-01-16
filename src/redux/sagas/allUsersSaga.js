import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

// gets all users
function* fetchAllUsers() {
  try {
    const response = yield call(axios.get, '/allUsers');
    yield put({type: 'SET_ALL_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets all pending requests for 360 report access
function* fetchPendingRequests() {
  try {
    const response = yield call(axios.get, '/allUsers/pendingRequests');
    yield put({type: 'SET_PENDING_REQUESTS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets all deactivated users
function* fetchDeactivatedUsers() {
  try {
    const response = yield call(axios.get, '/allUsers/deactivated');
    yield put({type: 'SET_DEACTIVATED_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets user search results
function* fetchUsersSearch(action) {
  try {
    const response = yield call(axios.get, '/allUsers/search', { params: action.payload } );
    yield put({type: 'SET_ALL_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// gets all users with access to 360 report
function* fetchThreesixtyUsers(action) {
  try {
    const response = yield call(axios.get, '/allUsers/threesixty', { params: action.payload } );
    yield put({type: 'SET_THREESIXTY_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* allUsersSaga() {
  yield takeLatest( 'FETCH_ALL_USERS', fetchAllUsers );
  yield takeLatest( 'FETCH_PENDING_REQUESTS', fetchPendingRequests );
  yield takeLatest( 'FETCH_DEACTIVATED_USERS', fetchDeactivatedUsers );
  yield takeLatest( 'FETCH_USERS_SEARCH', fetchUsersSearch );
  yield takeLatest( 'FETCH_THREESIXTY_USERS', fetchThreesixtyUsers );
};

export default allUsersSaga;