import firebase from 'firebase';
import { ApplyRequest } from '../../model/apply/applyRequest';

class ApplyService {
  postApply = async (applyRequest: ApplyRequest, uid: string) => {
    var postListRef = firebase.database().ref('users/' + uid + '/applies');
    var newPostRef = postListRef.push();
    return await newPostRef.set(applyRequest);
  };
}

const applyService = new ApplyService();
export default applyService;
