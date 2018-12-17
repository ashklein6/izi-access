import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';


function* create360(action) {
  try {
    const response = yield call(axios.post, '/', {data: action.payload} );
    yield put({ type: 'FETCH_360', payload: response });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetch360(action) {
  try {
    const response = yield call(axios.get, `//${action.payload}`);
    yield put({ type: 'SET_360', payload: response });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* edit360(action) {
  try {
    yield call(axios.put, `/${action.payload.table}`, {data: action.payload.data} );
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

function* changePublishStatus(action) {
  try {
    yield call(axios.put, `//${action.payload.id}`, {data: action.payload.status} );
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* changePrivateStatus(action) {
  try {
    yield call(axios.put, `//${action.payload.id}`, {data: action.payload.status} );
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* current360Saga() {
  yield takeLatest( 'CREATE_360', create360 );
  yield takeLatest( 'FETCH_360', fetch360 );
  yield takeLatest( 'EDIT_360', edit360 );
  yield takeLatest( 'DELETE_360', delete360 );
  yield takeLatest( 'CHANGE_PUBLISH_STATUS', changePublishStatus );
  yield takeLatest( 'CHANGE_PRIVATE_STATUS', changePrivateStatus );
};

export default current360Saga;