import { ApplyRequest } from '../../model/apply/applyRequest';

export interface ApplyStore {
  isLoading: boolean;
  error: string | undefined;
  apply: ApplyRequest;
}

const initApply: ApplyRequest = {
  style: '',
  place: '',
  startDate: '',
  comment: ''
};

export const initialApplyStore: ApplyStore = {
  isLoading: false,
  error: undefined,
  apply: initApply
};
