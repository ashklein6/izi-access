import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchAll360s() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchPublished() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetchUnpublished() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetch360SearchPublished() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* fetch360SearchUnpublished() {
  try {
    
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* all360sSaga() {
  yield takeLatest( 'FETCH_ALL_360s', fetchAll360s );
  yield takeLatest( 'FETCH_PUBLISHED', fetchPublished );
  yield takeLatest( 'FETCH_UNPUBLISHED', fetchUnpublished );
  yield takeLatest( 'FETCH_360_SEARCH_PUBLISHED', fetch360SearchPublished );
  yield takeLatest( 'FETCH_360_SEARCH_UNPUBLISHED', fetch360SearchUnpublished );
};

export default all360sSaga;