import firebase from 'firebase';

class LoguotService {
  postLogout = async () => {
    return await firebase.auth().signOut();
  };
}

const logoutService = new LoguotService();
export default logoutService;
