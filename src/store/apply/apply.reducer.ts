import {
  ApplyActions,
  POST_APPLY_FAILURE,
  POST_APPLY_REQUEST,
  POST_APPLY_SUCCESS
} from './apply.actions';
import { ApplyStore, initialApplyStore } from './apply.store';

export const applyReducer = (
  state = initialApplyStore,
  action: ApplyActions
): ApplyStore => {
  switch (action.type) {
    case POST_APPLY_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case POST_APPLY_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false
      };
    case POST_APPLY_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false
      };
    default:
      return state;
  }
};
