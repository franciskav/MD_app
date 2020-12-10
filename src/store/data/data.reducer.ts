import { initialDataStore, DataStore } from './data.store';
import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  DataActions,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './data.actions';

export const dataReducer = (
  state = initialDataStore,
  action: DataActions
): DataStore => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false
      };
    case GET_DATA_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        data: action.response
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false
      };
    default:
      return state;
  }
};
