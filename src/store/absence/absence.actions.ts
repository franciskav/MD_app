import { AbsenceRequest } from '../../model/absence/absenceRequest';
import { Class } from '../../model/absence/class';

export const POST_ABSENCE_REQUEST = 'POST_ABSENCE_REQUEST';
export const POST_ABSENCE_SUCCESS = 'POST_ABSENCE_SUCCESS';
export const POST_ABSENCE_FAILURE = 'POST_ABSENCE_FAILURE';
export const GET_MYCLASSES_REQUEST = 'GET_MYCLASSES_REQUEST';
export const GET_MYCLASSES_SUCCESS = 'GET_MYCLASSES_SUCCESS';
export const GET_MYCLASSES_FAILURE = 'GET_MYCLASSES_FAILURE';

export interface PostAbsenceRequestAction {
  type: typeof POST_ABSENCE_REQUEST;
  successAction: () => void;
  absenceRequest: AbsenceRequest;
}

export interface PostAbsenceSuccessAction {
  type: typeof POST_ABSENCE_SUCCESS;
}

export interface PostAbsenceFailAction {
  type: typeof POST_ABSENCE_FAILURE;
  reason: string | undefined;
}

export interface GetMyClassesRequestAction {
  type: typeof GET_MYCLASSES_REQUEST;
}

export interface GetMyClassesSuccessAction {
  type: typeof GET_MYCLASSES_SUCCESS;
  response: Class[];
}

export interface GetMyClassesFailAction {
  type: typeof GET_MYCLASSES_FAILURE;
  reason: string | undefined;
}

export type AbsenceActions =
  | PostAbsenceRequestAction
  | PostAbsenceSuccessAction
  | PostAbsenceFailAction
  | GetMyClassesRequestAction
  | GetMyClassesSuccessAction
  | GetMyClassesFailAction;

export const postAbsence = (
  dataRequest: AbsenceRequest,
  successAction: () => void
): PostAbsenceRequestAction => ({
  type: POST_ABSENCE_REQUEST,
  absenceRequest: dataRequest,
  successAction
});

export const postAbsenceSuccessActionCreator = (): PostAbsenceSuccessAction => ({
  type: POST_ABSENCE_SUCCESS
});

export const postAbsenceFailActionCreator = (
  reason: string
): PostAbsenceFailAction => ({
  type: POST_ABSENCE_FAILURE,
  reason
});

export const getMyClasses = (): GetMyClassesRequestAction => ({
  type: GET_MYCLASSES_REQUEST
});

export const getMyClassesSuccessActionCreator = (
  classes: Class[]
): GetMyClassesSuccessAction => ({
  type: GET_MYCLASSES_SUCCESS,
  response: classes
});

export const getMyClassesFailActionCreator = (
  reason: string
): GetMyClassesFailAction => ({
  type: GET_MYCLASSES_FAILURE,
  reason
});
