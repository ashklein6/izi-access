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
  try {
    const response = yield call(axios.get, `//${action.payload}`);
    yield put({ type: 'SET_360', payload: response });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetch360Section(action) {
  console.log('inside fetch360Section in saga');
  try {
    const response = yield call(axios.get, `/current360/section`, {params: action.payload});
    yield put({ type: 'SET_360_SECTION', payload: {section: action.payload.section, content: response.data} });
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
};

export default current360Saga;