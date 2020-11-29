import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import signupService from '../../utility/services/signupService';
import {
  postSignupFailActionCreator,
  PostSignupRequestAction,
  postSignupSuccessActionCreator,
  POST_SIGNUP_REQUEST
} from './signup.actions';

export function* signupSaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(POST_SIGNUP_REQUEST, postSignupActionWatcher);
}

function* postSignupActionWatcher(action: PostSignupRequestAction) {
  try {
    const response = yield signupService.postSignup(action.signupRequest);
    yield AsyncStorage.setItem(AsyncStorageKeys.UID, response.user.uid);
    yield AsyncStorage.setItem(
      AsyncStorageKeys.REFRESH_TOKEN,
      response.user.refreshToken
    );
    yield put(postSignupSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error.code);
    yield put(postSignupFailActionCreator(error.code));
    //action.failAction();
  }
}
