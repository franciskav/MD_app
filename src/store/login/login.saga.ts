import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import loginService from '../../utility/services/loginService';
import {
  postLoginFailActionCreator,
  PostLoginRequestAction,
  postLoginSuccessActionCreator,
  POST_LOGIN_REQUEST
} from './login.actions';

export function* loginSaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(POST_LOGIN_REQUEST, postLoginActionWatcher);
}

function* postLoginActionWatcher(action: PostLoginRequestAction) {
  try {
    const response = yield loginService.postLogin(action.loginRequest);
    yield AsyncStorage.setItem(AsyncStorageKeys.UID, response.user.uid);
    yield AsyncStorage.setItem(
      AsyncStorageKeys.REFRESH_TOKEN,
      response.user.refreshToken
    );
    yield put(postLoginSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log('bejelentkezés hiba');
    console.log(error.code);
    yield put(postLoginFailActionCreator(error.code));
  }
}
