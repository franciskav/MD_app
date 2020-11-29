import { SignupRequest } from '../../model/authenticate/signupRequest';

export const POST_SIGNUP_REQUEST = 'POST_SIGNUP_REQUEST';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';

export interface PostSignupRequestAction {
  type: typeof POST_SIGNUP_REQUEST;
  successAction: () => void;
  //failAction: () => void;
  signupRequest: SignupRequest;
}

export interface PostSignupSuccessAction {
  type: typeof POST_SIGNUP_SUCCESS;
}

export interface PostSignupFailAction {
  type: typeof POST_SIGNUP_FAILURE;
  reason: string | undefined;
}

export type SignupActions =
  | PostSignupRequestAction
  | PostSignupSuccessAction
  | PostSignupFailAction;

export const postSignup = (
  signupRequest: SignupRequest,
  successAction: () => void
  //failAction: () => void
): PostSignupRequestAction => ({
  type: POST_SIGNUP_REQUEST,
  signupRequest: signupRequest,
  successAction
  //failAction
});

export const postSignupSuccessActionCreator = (): PostSignupSuccessAction => ({
  type: POST_SIGNUP_SUCCESS
});

export const postSignupFailActionCreator = (
  reason: string
): PostSignupFailAction => ({
  type: POST_SIGNUP_FAILURE,
  reason
});
