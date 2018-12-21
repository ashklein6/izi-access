import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchUserInfo() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* add360Access() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* remove360Access() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* request360Access() {
  try {
    
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
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* changeUserStatus() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* deletePendingRequest(action) {
  try {
    yield call(axios.delete, `/userControls/${action.payload}`)
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
  yield takeLatest( 'CHANGE_USER_STATUS', changeUserStatus );
  yield takeLatest( 'DELETE_PENDING_REQUEST', deletePendingRequest );
}

export default userControlsSaga;