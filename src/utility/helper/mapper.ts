import { Data } from '../../model/data/data';
import { DataResponse } from '../../model/data/dataResponse';
import { News } from '../../model/news/news';
import { NewsResponse } from '../../model/news/newsResponse';
import { Timetable } from '../../model/timetable/timetable';
import { TimetableResponse } from '../../model/timetable/timetableResponse';

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

export const timetableResponseToTimetable = (
  timetableResponse: TimetableResponse
): Timetable => {
  const timetable: Timetable = { places: [] };
  places.forEach(p => {
    const place = timetableResponse.places.find(f => f.place === p);
    if (place) {
      timetable.places.push(place);
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
