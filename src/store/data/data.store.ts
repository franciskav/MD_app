import { Data } from '../../model/data/data';
import { DataRequest } from '../../model/data/dataRequest';
import { DataResponse } from '../../model/data/dataResponse';

export interface DataStore {
  isLoading: boolean;
  error: string | undefined;
  dataRequest: DataRequest;
  data: Data;
}

const initDataRequest: DataRequest = {
  address: '',
  name: '',
  phone: '',
  dataAccepted: false,
  termsAccepted: false
};
const initDataResponse: Data = {
  address: '',
  name: '',
  phone: ''
};

export const initialDataStore: DataStore = {
  isLoading: false,
  error: undefined,
  dataRequest: initDataRequest,
  data: initDataResponse
};
