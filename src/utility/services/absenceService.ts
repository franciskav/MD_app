import firebase from 'firebase';
import { AbsenceRequest } from '../../model/absence/absenceRequest';
import { Class } from '../../model/absence/class';

class AbsenceService {
  postAbsence = async (absenceRequest: AbsenceRequest, uid: string) => {
    var postListRef = firebase.database().ref('users/' + uid + '/absences');
    var newPostRef = postListRef.push();
    return await newPostRef.set(absenceRequest);
  };

  getMyClasses = async (uid: string) => {
    var keys: string[] = [];
    await firebase
      .database()
      .ref('users/' + uid + '/classes')
      .once('value', snapshot => {
        snapshot.forEach(s => {
          if (s.key) {
            keys.push(s.key);
          }
        });
      });
    return keys;
  };

  getClasses = async (keys: string[]) => {
    var classes: Class[] = [];

    const pArray = keys.map(async key => {
      const response = await this.getClass(key);
      return response;
    });
    classes = await Promise.all(pArray);
    return classes;
  };

  getClass = async (key: string) => {
    var classResponse: Class = {
      id: '',
      teacher: '',
      description: '',
      agelimit: '',
      time: '',
      selected: false
    };

    await firebase
      .database()
      .ref('classes/' + key)
      .once('value', snapshot => {
        if (snapshot.val()) {
          classResponse = {
            id: snapshot.key,
            teacher: snapshot.val().teacher,
            description: snapshot.val().description,
            agelimit: snapshot.val().agelimit,
            time: snapshot.val().time,
            selected: false
          };
        }
      });
    return classResponse;
  };
}

const absenceService = new AbsenceService();
export default absenceService;
