import { AbsenceRequest } from '../../model/absence/absenceRequest';
import { Class } from '../../model/absence/class';

export interface AbsenceStore {
  isLoading: boolean;
  getError: string | undefined;
  postError: string | undefined;
  absenceRequest: AbsenceRequest;
  classes: Class[];
}

const initAbsenceRequest: AbsenceRequest = {
  classes: [],
  from: new Date(Date.now()),
  to: new Date(Date.now()),
  comment: ''
};

export const initialAbsenceStore: AbsenceStore = {
  isLoading: false,
  getError: undefined,
  postError: undefined,
  absenceRequest: initAbsenceRequest,
  classes: []
};
