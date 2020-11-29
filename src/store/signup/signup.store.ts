import { SignupRequest } from '../../model/authenticate/signupRequest';

export interface SignupStore {
  isLoading: boolean;
  error: string | undefined;
  signup: SignupRequest;
}

const initSignup: SignupRequest = {
  email: '',
  password: '',
  address: '',
  name: '',
  phoneNumber: ''
};

export const initialSignupStore: SignupStore = {
  isLoading: false,
  error: undefined,
  signup: initSignup
};
