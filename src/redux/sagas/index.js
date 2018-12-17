import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import all360sSaga from './all360sSaga';
import current360Saga from './current360Saga';
import allUsersSaga from './allUsersSaga';
import userControlsSaga from './userControlsSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    all360sSaga(),
    current360Saga(),
    allUsersSaga(),
    userControlsSaga(),
  ]);
}
