import firebase from 'firebase';
import { LoginRequest } from '../../model/authenticate/loginRequest';

class LoginService {
  postLogin = async (loginRequest: LoginRequest) => {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(loginRequest.email, loginRequest.password);
  };
}

const loginService = new LoginService();
export default loginService;
