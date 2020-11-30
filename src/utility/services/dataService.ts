import firebase from 'firebase';
import { DataRequest } from '../../model/data/dataRequest';
import { DataResponse } from '../../model/data/dataResponse';

class DataService {
  postData = async (dataRequest: DataRequest, uid: string) => {
    return await firebase
      .database()
      .ref('users/' + uid + '/data')
      .set(dataRequest);
  };
  getData = async (uid: string) => {
    var dataResponse: DataResponse = {
      name: '',
      phone: '',
      address: '',
      dataAccepted: false,
      termsAccepted: false
    };
    await firebase
      .database()
      .ref('users/' + uid + '/data')
      .once('value', snapshot => {
        dataResponse = {
          name: snapshot.val().name,
          phone: snapshot.val().phone,
          address: snapshot.val().address,
          termsAccepted: snapshot.val().termsAccepted,
          dataAccepted: snapshot.val().dataAccepted
        };
      });
    return dataResponse;
  };
}

const dataService = new DataService();
export default dataService;
