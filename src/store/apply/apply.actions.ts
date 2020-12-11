import { ApplyRequest } from '../../model/apply/applyRequest';

export const POST_APPLY_REQUEST = 'POST_APPLY_REQUEST';
export const POST_APPLY_SUCCESS = 'POST_APPLY_SUCCESS';
export const POST_APPLY_FAILURE = 'POST_APPLY_FAILURE';

export interface PostApplyRequestAction {
  type: typeof POST_APPLY_REQUEST;
  successAction: () => void;
  applyRequest: ApplyRequest;
}

export interface PostApplySuccesAction {
  type: typeof POST_APPLY_SUCCESS;
}

export interface PostApplyFailAction {
  type: typeof POST_APPLY_FAILURE;
  reason: string | undefined;
}

export type ApplyActions =
  | PostApplyRequestAction
  | PostApplySuccesAction
  | PostApplyFailAction;

export const postApply = (
  applyRequest: ApplyRequest,
  successAction: () => void
): PostApplyRequestAction => ({
  type: POST_APPLY_REQUEST,
  successAction,
  applyRequest: applyRequest
});

export const postApplySuccessActionCreator = (): PostApplySuccesAction => ({
  type: POST_APPLY_SUCCESS
});

export const postApplyFailActionCreator = (
  reason: string
): PostApplyFailAction => ({
  type: POST_APPLY_FAILURE,
  reason
});
