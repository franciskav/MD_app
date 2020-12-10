import { LoginRequest } from '../../model/authenticate/loginRequest';

export interface LoginStore {
  isLoading: boolean;
  error: string | undefined;
  login: LoginRequest;
}

const initLogin: LoginRequest = { email: '', password: '' };

export const initialLoginStore: LoginStore = {
  isLoading: false,
  error: undefined,
  login: initLogin
};
