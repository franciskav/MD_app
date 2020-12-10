import {
  AbsenceActions,
  GET_MYCLASSES_FAILURE,
  GET_MYCLASSES_REQUEST,
  GET_MYCLASSES_SUCCESS,
  POST_ABSENCE_FAILURE,
  POST_ABSENCE_REQUEST,
  POST_ABSENCE_SUCCESS,
  SET_SELECTED
} from './absence.actions';
import { AbsenceStore, initialAbsenceStore } from './absence.store';

export const absenceReducer = (
  state = initialAbsenceStore,
  action: AbsenceActions
): AbsenceStore => {
  switch (action.type) {
    case POST_ABSENCE_REQUEST:
      return {
        ...state,
        getError: undefined,
        postError: undefined,
        isLoading: true
      };
    case POST_ABSENCE_SUCCESS:
      return {
        ...state,
        getError: undefined,
        postError: undefined,
        isLoading: false
      };
    case POST_ABSENCE_FAILURE:
      return {
        ...state,
        getError: undefined,
        postError: action.reason,
        isLoading: false
      };
    case GET_MYCLASSES_REQUEST:
      return {
        ...state,
        getError: undefined,
        postError: undefined,
        isLoading: true
      };
    case GET_MYCLASSES_SUCCESS:
      return {
        ...state,
        getError: undefined,
        postError: undefined,
        isLoading: false,
        classes: action.response
      };
    case GET_MYCLASSES_FAILURE:
      return {
        ...state,
        getError: action.reason,
        postError: undefined,
        isLoading: false
      };
    case SET_SELECTED:
      return {
        ...state,
        classes: action.classes
      };
    default:
      return state;
  }
};
