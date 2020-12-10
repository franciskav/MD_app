import { all, put, takeEvery } from 'redux-saga/effects';
import { TimetableResponse } from '../../model/timetable/timetableResponse';
import { timetableResponseToTimetable } from '../../utility/helper/mapper';
import timetableService from '../../utility/services/timetableService';
import {
  getTimetableFailActionCreator,
  GetTimetableRequestAction,
  getTimetableSuccessActionCreator,
  GET_TIMETABLE_REQUEST
} from './timetable.actions';

export function* timetableSaga() {
  yield all([watchGet()]);
}

function* watchGet() {
  yield takeEvery(GET_TIMETABLE_REQUEST, getTimetableActionWatcher);
}

function* getTimetableActionWatcher(action: GetTimetableRequestAction) {
  try {
    const response: TimetableResponse = yield timetableService.getTimetable();
    const timetable = timetableResponseToTimetable(response);
    //console.log('RESPONSE', timetable);
    yield put(getTimetableSuccessActionCreator(timetable));
  } catch (error) {
    console.log('error', error.code);
    yield put(getTimetableFailActionCreator(error.code));
  }
}
