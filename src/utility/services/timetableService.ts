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
      .once('value', snapshot =>
        snapshot.forEach(semester => {
          var places: Place[] = [];
          semester.forEach(place => {
            var days: Day[] = [];
            place.forEach(day => {
              var classes: Class[] = [];
              day.forEach(course => {
                classes.push({
                  id: course.key,
                  agelimit: course.val().agelimit,
                  description: course.val().description,
                  teacher: course.val().teacher,
                  time: course.val().time
                });
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
}

const timetableService = new TimetableService();
export default timetableService;
