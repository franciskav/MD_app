import { all } from 'redux-saga/effects';
import { loginSaga } from './src/store/login/login.saga';
import { logoutSaga } from './src/store/logout/logout.saga';
import { newsSaga } from './src/store/news/news.saga';
import { signupSaga } from './src/store/signup/signup.saga';
import { timetableSaga } from './src/store/timetable/timetable.saga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    signupSaga(),
    logoutSaga(),
    newsSaga(),
    timetableSaga()
  ]);
}
