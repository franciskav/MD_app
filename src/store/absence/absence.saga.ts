import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorageKeys } from '../../constants/asyncStorageKeys';
import { dataResponseToData } from '../../utility/helper/mapper';
import absenceService from '../../utility/services/absenceService';
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

export function* absenceSaga() {
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
    const response = yield absenceService.postAbsence(
      action.absenceRequest,
      uid
    );
    yield put(postAbsenceSuccessActionCreator());
    action.successAction();
  } catch (error) {
    console.log(error);
    yield put(postAbsenceFailActionCreator(error));
  }
}

function* getMyClassesActionWatcher(action: GetMyClassesRequestAction) {
  try {
    const uid = yield AsyncStorage.getItem(AsyncStorageKeys.UID);
    const response = yield absenceService.getMyClasses(uid);
    const classes = yield absenceService.getClasses(response);
    yield put(getMyClassesSuccessActionCreator(classes));
  } catch (error) {
    console.log(error);
    yield put(getMyClassesFailActionCreator(error));
  }
}
