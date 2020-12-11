import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import applyService from '../../utility/services/applyService';
import {
  postApplyFailActionCreator,
  PostApplyRequestAction,
  postApplySuccessActionCreator,
  POST_APPLY_REQUEST
} from './apply.actions';

export function* applySaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(POST_APPLY_REQUEST, postApplyActionWatcher);
}

function* postApplyActionWatcher(action: PostApplyRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    const response = yield applyService.postApply(action.applyRequest, uid);
    yield put(postApplySuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error);
    yield put(postApplyFailActionCreator(error));
  }
}
