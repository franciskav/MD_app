import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import logoutService from '../../utility/services/logoutService';
import {
  postLogoutFailActionCreator,
  PostLogoutRequestAction,
  postLogoutSuccessActionCreator,
  POST_LOGOUT_REQUEST
} from './logout.actions';

export function* logoutSaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(POST_LOGOUT_REQUEST, postLogoutActionWatcher);
}

function* postLogoutActionWatcher(action: PostLogoutRequestAction) {
  try {
    logoutService.postLogout();
    yield AsyncStorage.multiRemove([
      AsyncStorageKeys.REFRESH_TOKEN,
      AsyncStorageKeys.UID
    ]);
    yield put(postLogoutSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error.code);
    yield put(postLogoutFailActionCreator(error.code));
  }
}
