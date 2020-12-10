import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import { dataResponseToData } from '../../utility/helper/mapper';
import {
  getMyClassesFailActionCreator,
  GetMyClassesRequestAction,
  getMyClassesSuccessActionCreator,
  GET_MYCLASSES_REQUEST,
  postAbsenceFailActionCreator,
  PostAbsenceRequestAction,
  postAbsenceSuccessActionCreator,
  POST_ABSENCE_REQUEST
} from './absence.actions';

export function* dataSaga() {
  yield all([watchPost(), watchGet()]);
}

function* watchPost() {
  yield takeEvery(POST_ABSENCE_REQUEST, postAbsenceActionWatcher);
}

function* watchGet() {
  yield takeEvery(GET_MYCLASSES_REQUEST, getMyClassesActionWatcher);
}

function* postAbsenceActionWatcher(action: PostAbsenceRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    //TODO: service
    //const response = yield dataService.postData(action.dataRequest, uid);
    yield put(postAbsenceSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error);
    yield put(postAbsenceFailActionCreator(error));
    //action.failAction();
  }
}

function* getMyClassesActionWatcher(action: GetMyClassesRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    //TODO: service
    //const response = yield dataService.getData(uid);
    //const data = dataResponseToData(response);
    yield put(getMyClassesSuccessActionCreator([]));
  } catch (error) {
    console.log(error);
    yield put(getMyClassesFailActionCreator(error));
    //action.failAction();
  }
}
