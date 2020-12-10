import {
  GET_TIMETABLE_FAILURE,
  GET_TIMETABLE_REQUEST,
  GET_TIMETABLE_SUCCESS,
  TimetableActions
} from './timetable.actions';
import {
  initialTimetable,
  initialTimetableStore,
  TimetableStore
} from './timetable.store';

export const timetableReducer = (
  state = initialTimetableStore,
  action: TimetableActions
): TimetableStore => {
  switch (action.type) {
    case GET_TIMETABLE_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case GET_TIMETABLE_SUCCESS:
      //console.log('Action.RESPONSE', action.response);
      return {
        ...state,
        error: undefined,
        isLoading: false,
        timetable: action.response
      };
    case GET_TIMETABLE_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        timetable: initialTimetable
      };
    default:
      return state;
  }
};
