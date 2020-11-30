import { SignupRequest } from '../../model/authenticate/signupRequest';

export interface SignupStore {
  isLoading: boolean;
  error: string | undefined;
  signup: SignupRequest;
}

const initSignup: SignupRequest = {
  email: '',
  password: ''
};

export const initialSignupStore: SignupStore = {
  isLoading: false,
  error: undefined,
  signup: initSignup
};
