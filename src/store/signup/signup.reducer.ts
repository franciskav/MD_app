import { initialSignupStore, SignupStore } from './signup.store';
import {
  POST_SIGNUP_FAILURE,
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  SignupActions
} from './signup.actions';

export const signupReducer = (
  state = initialSignupStore,
  action: SignupActions
): SignupStore => {
  switch (action.type) {
    case POST_SIGNUP_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false
      };
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false
      };
    default:
      return state;
  }
};
