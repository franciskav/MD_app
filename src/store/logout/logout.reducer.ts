import {
  LogoutActions,
  POST_LOGOUT_FAILURE,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS
} from './logout.actions';
import { initialLogoutStore, LogoutStore } from './logout.store';

export const logoutReducer = (
  state = initialLogoutStore,
  action: LogoutActions
): LogoutStore => {
  switch (action.type) {
    case POST_LOGOUT_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case POST_LOGOUT_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false
      };
    case POST_LOGOUT_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false
      };
    default:
      return state;
  }
};
