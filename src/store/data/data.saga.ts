import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import { dataResponseToData } from '../../utility/helper/mapper';
import dataService from '../../utility/services/dataService';
import {
  getDataFailActionCreator,
  GetDataRequestAction,
  getDataSuccessActionCreator,
  GET_DATA_REQUEST,
  postDataFailActionCreator,
  PostDataRequestAction,
  postDataSuccessActionCreator,
  POST_DATA_REQUEST
} from './data.actions';

export function* dataSaga() {
  yield all([watchPost(), watchGet()]);
}

function* watchPost() {
  yield takeEvery(POST_DATA_REQUEST, postDataActionWatcher);
}

function* watchGet() {
  yield takeEvery(GET_DATA_REQUEST, getDataActionWatcher);
}

function* postDataActionWatcher(action: PostDataRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    const response = yield dataService.postData(action.dataRequest, uid);
    yield put(postDataSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error);
    yield put(postDataFailActionCreator(error));
  }
}

function* getDataActionWatcher(action: GetDataRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    const response = yield dataService.getData(uid);
    const data = dataResponseToData(response);
    yield put(getDataSuccessActionCreator(data));
  } catch (error) {
    console.log(error);
    yield put(getDataFailActionCreator(error));
  }
}
