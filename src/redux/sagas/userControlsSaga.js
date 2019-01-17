import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

// gets user's info
function* fetchUserInfo() {
  try {
    const response = yield call(axios.get, '/userControls');
    yield put({type: 'SET_USER_INFO', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// grants a user access to a 360 report
function* add360Access(action) {
  try {
    yield call(axios.post, '/userControls/add', {data: action.payload});
    yield put({ type: 'FETCH_360_CLIENTS', payload: action.payload});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// removes a user's access permissions to a 360 report
function* remove360Access(action) {
  try {
    yield call(axios.delete, `/userControls/threesixty/${action.payload}`);
    yield put({type: 'FETCH_ALL_USERS'});

  } 
  catch (error) {
    console.log('error', error);
  }
};

// removes a user's access permissions to a 360 report
function* remove360AccessFrom360(action) {
  try {
    yield call(axios.delete, `/userControls/threesixty/${action.payload.threesixtyUserId}`);
    yield put({type: 'FETCH_360_CLIENTS', payload: action.payload});

  } 
  catch (error) {
    console.log('error', error);
  }
};

// posts that a user has requested access to a 360 report
function* request360Access(action) {
  try {
    yield call(axios.post, '/userControls', {data: action.payload});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// saves edits an admin makes to a user's info
function* editUserInfo(action) {
  try {
    yield call(axios.put, '/userControls', {data: action.payload});
    yield put({type: 'FETCH_ALL_USERS'});
    yield put({type: 'FETCH_DEACTIVATED_USERS'});
    yield put({type: 'FETCH_PENDING_REQUESTS'});
    // it's worth looking into a better/more efficient way to handle this,
    // but that seems like an after-the-break sort of thing
  } 
  catch (error) {
    console.log('error', error);
  }
};

// saves edits a user makes to their profile
function* editCurrentUserInfo(action) {
  try {
    yield call(axios.put, '/userControls/currentUser', {data: action.payload});
    yield put({type: 'FETCH_USER'});
  } 
  catch (error) {
    console.log('error', error);
  }
};

// removes user's request from admin's pending requests table
function* deletePendingRequest(action) {
  try {
    yield call(axios.delete, `/userControls/${action.payload}`);
    yield put({type: 'FETCH_PENDING_REQUESTS'});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* userControlsSaga() {
  yield takeLatest( 'FETCH_USER_INFO', fetchUserInfo );
  yield takeLatest( 'ADD_360_ACCESS', add360Access );
  yield takeLatest( 'REMOVE_360_ACCESS', remove360Access );
  yield takeLatest( 'REMOVE_360_ACCESS_FROM_360', remove360AccessFrom360 );
  yield takeLatest( 'REQUEST_360_ACCESS', request360Access );
  yield takeLatest( 'EDIT_USER_INFO', editUserInfo );
  yield takeLatest( 'DELETE_PENDING_REQUEST', deletePendingRequest );
  yield takeLatest( 'EDIT_CURRENT_USER_INFO', editCurrentUserInfo );
}

export default userControlsSaga;