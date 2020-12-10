import { Data } from '../../model/data/data';
import { DataResponse } from '../../model/data/dataResponse';
import { News } from '../../model/news/news';
import { NewsResponse } from '../../model/news/newsResponse';
import { Day, Timetable } from '../../model/timetable/timetable';
import {
  Class,
  TimetableResponse
} from '../../model/timetable/timetableResponse';

const MONTH = [
  '',
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december'
];

const places = ['arany', 'astoria_a', 'astoria_b'];
const days = ['monday_wednesday', 'tuesday_thursday', 'friday'];

export const newsResponseToNews = (newsResponse: NewsResponse[]): News[] => {
  const news: News[] = newsResponse.map(n => {
    return {
      id: n.id ? n.id : '0',
      title: n.title,
      date: dateHelper(n.date),
      details: n.details,
      image: n.image
    };
  });
  return news.reverse();
};

const dateHelper = (date: Date) => {
  const localDate = new Date(date);
  const year = localDate.getFullYear();
  const month = MONTH[localDate.getMonth()];
  const day = localDate.getDate();
  return `${year}. ${month.toString().toUpperCase()} ${day}.`;
};

export const timetableResponseToTimetable = (
  timetableResponse: TimetableResponse,
  classes: Class[]
): Timetable => {
  const timetable: Timetable = { places: [] };
  places.forEach(p => {
    const place = timetableResponse.places.find(f => f.place === p);
    if (place) {
      timetableResponse.places.forEach(p => {
        var days: Day[] = [];
        p.days.forEach(d => {
          var courses: Class[] = [];
          d.classes.forEach(c => {
            var course = classes.find(course => course.id === c);
            if (course) {
              courses.push(course);
            }
          });
          days.push({ day: d.day, classes: courses });
        });
        timetable.places.push({ place: p.place, days: days });
      });
    } else {
      timetable.places.push({
        place: p,
        days: [
          {
            day: 'monday_wednesday',
            classes: []
          },
          {
            day: 'tuesday_thursday',
            classes: []
          },
          {
            day: 'friday',
            classes: []
          }
        ]
      });
    }
  });
  timetable.places.forEach(p => {
    days.forEach(d => {
      const day = p.days.find(pd => pd.day === d);
      if (!day) {
        p.days.push({
          day: d,
          classes: []
        });
      }
    });
  });
  return timetable;
};

export const dataResponseToData = (dataResponse: DataResponse): Data => {
  const data = {
    name: dataResponse.name,
    address: dataResponse.address,
    phone: dataResponse.phone
  };
  return data;
};
