import { Timetable } from '../../model/timetable/timetable';

export const GET_TIMETABLE_REQUEST = 'GET_TIMETABLE_REQUEST';
export const GET_TIMETABLE_SUCCESS = 'GET_TIMETABLE_SUCCESS';
export const GET_TIMETABLE_FAILURE = 'GET_TIMETABLE_FAILURE';

export interface GetTimetableRequestAction {
  type: typeof GET_TIMETABLE_REQUEST;
}

export interface GetTimetableSuccessAction {
  type: typeof GET_TIMETABLE_SUCCESS;
  response: Timetable;
}

export interface GetTimetableFailAction {
  type: typeof GET_TIMETABLE_FAILURE;
  reason: string | undefined;
}

export type TimetableActions =
  | GetTimetableRequestAction
  | GetTimetableSuccessAction
  | GetTimetableFailAction;

export const getTimetable = (): GetTimetableRequestAction => ({
  type: GET_TIMETABLE_REQUEST
});

export const getTimetableSuccessActionCreator = (
  timetable: Timetable
): GetTimetableSuccessAction => ({
  type: GET_TIMETABLE_SUCCESS,
  response: timetable
});

export const getTimetableFailActionCreator = (
  reason: string
): GetTimetableFailAction => ({
  type: GET_TIMETABLE_FAILURE,
  reason
});
