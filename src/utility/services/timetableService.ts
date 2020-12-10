import firebase from 'firebase';
import {
  Class,
  Day,
  Place,
  TimetableResponse
} from '../../model/timetable/timetableResponse';

class TimetableService {
  getTimetable = async () => {
    var timetable: TimetableResponse = {
      from: undefined,
      to: undefined,
      places: []
    };
    await firebase
      .database()
      .ref('timetable')
      .orderByChild('to')
      .startAt(Date.now())
      .limitToFirst(1)
      .once('value', snapshot =>
        snapshot.forEach(semester => {
          var places: Place[] = [];
          semester.forEach(place => {
            var days: Day[] = [];
            place.forEach(day => {
              var classes: string[] = [];
              day.forEach(course => {
                if (course.key) {
                  classes.push(course.key);
                }
              });
              days.push({ day: day.key, classes: classes });
            });
            places.push({ place: place.key, days: days });
          });
          timetable.from = semester.val().from;
          timetable.to = semester.val().to;
          timetable.places = places;
        })
      );
    if (timetable.from) {
      if (timetable.from > new Date(Date.now())) {
        timetable = { from: undefined, to: undefined, places: [] };
      }
    }
    return timetable;
  };

  getClasses = async (timetable: TimetableResponse) => {
    var keys: string[] = [];
    var classes: Class[] = [];

    timetable.places.forEach(p => {
      p.days.forEach(d => {
        d.classes.forEach(c => {
          keys.push(c);
        });
      });
    });

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
      time: ''
    };

    await firebase
      .database()
      .ref('classes/' + key)
      .once('value', snapshot => {
        classResponse = {
          id: snapshot.key,
          teacher: snapshot.val().teacher,
          description: snapshot.val().description,
          agelimit: snapshot.val().agelimit,
          time: snapshot.val().time
        };
      });
    return classResponse;
  };
}

const timetableService = new TimetableService();
export default timetableService;
