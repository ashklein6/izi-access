import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchUserInfo() {
  try {
    const response = yield call(axios.get, '/userControls');
    yield put({type: 'SET_USER_INFO', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* add360Access(action) {
  try {
    yield call(axios.post, '/userControls/add', {data: action.payload});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* remove360Access(action) {
  try {
    yield call(axios.delete, `/userControls/threesixty/${action.payload}`);
    yield put({type: 'FETCH_ALL_USERS'});

  } 
  catch (error) {
    console.log('error', error);
  }
};

function* request360Access(action) {
  try {
    yield call(axios.post, '/userControls', {data: action.payload});
  } 
  catch (error) {
    console.log('error', error);
  }
};

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

function* editCurrentUserInfo(action) {
  try {
    yield call(axios.put, '/userControls/currentUser', {data: action.payload});
    yield put({type: 'FETCH_USER'});
  } 
  catch (error) {
    console.log('error', error);
  }
};

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
  yield takeLatest( 'REQUEST_360_ACCESS', request360Access );
  yield takeLatest( 'EDIT_USER_INFO', editUserInfo );
  yield takeLatest( 'DELETE_PENDING_REQUEST', deletePendingRequest );
  yield takeLatest( 'EDIT_CURRENT_USER_INFO', editCurrentUserInfo );
}

export default userControlsSaga;