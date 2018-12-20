import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';


function* fetchAccessLevels(action) {
  try {
    const response = yield call(axios.get, '/userAccessLevel' );
    yield put({ type: 'SET_ACCESS_LEVELS', payload: response.data });
  } 
  catch (error) {
    console.log('error', error);
  }
};

function* userAccessLevelSaga() {
  yield takeLatest( 'FETCH_ACCESS_LEVELS', fetchAccessLevels );
};

export default userAccessLevelSaga;