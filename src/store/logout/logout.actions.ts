export const POST_LOGOUT_REQUEST = 'POST_LOGOUT_REQUEST';
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS';
export const POST_LOGOUT_FAILURE = 'POST_LOGOUT_FAILURE';

export interface PostLogoutRequestAction {
  type: typeof POST_LOGOUT_REQUEST;
  successAction: () => void;
}

export interface PostLogoutSuccessAction {
  type: typeof POST_LOGOUT_SUCCESS;
}

export interface PostLogoutFailAction {
  type: typeof POST_LOGOUT_FAILURE;
  reason: string | undefined;
}

export type LogoutActions =
  | PostLogoutRequestAction
  | PostLogoutSuccessAction
  | PostLogoutFailAction;

export const postLogout = (
  successAction: () => void
): PostLogoutRequestAction => ({
  type: POST_LOGOUT_REQUEST,
  successAction
});

export const postLogoutSuccessActionCreator = (): PostLogoutSuccessAction => ({
  type: POST_LOGOUT_SUCCESS
});

export const postLogoutFailActionCreator = (
  reason: string
): PostLogoutFailAction => ({
  type: POST_LOGOUT_FAILURE,
  reason
});
