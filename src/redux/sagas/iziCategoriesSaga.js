import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

// gets all IZI categories
function* fetchIziCategories() {
  try {
    const response = yield call(axios.get, '/iziCategories');
    yield put( { type: 'SET_IZI_CATEGORIES', payload: response.data } );
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* allUsersSaga() {
  yield takeLatest( 'FETCH_IZI_CATEGORIES', fetchIziCategories );
};

export default allUsersSaga;