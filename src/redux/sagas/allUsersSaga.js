import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchAllUsers() {
  try {
    const response = yield call(axios.get, '/allUsers');
    yield put({type: 'SET_ALL_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchPendingRequests() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchDeactivatedUsers() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchUsersSearch(action) {
  try {
    const response = yield call(axios.get, '/allUsers/search', { params: action.payload } );
    console.log('response', response.data);
    yield put({type: 'SET_ALL_USERS', payload: response.data});
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchUsersSort() {
  try {
    
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
  yield takeLatest( 'FETCH_USERS_SORT', fetchUsersSort );
};

export default allUsersSaga;