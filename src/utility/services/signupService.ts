import firebase from 'firebase';
import { SignupRequest } from '../../model/authenticate/signupRequest';

class SignupService {
  postSignup = async (signupRequest: SignupRequest) => {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(
        signupRequest.email,
        signupRequest.password
      );
  };
}

const signupService = new SignupService();
export default signupService;
