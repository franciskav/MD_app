export interface Timetable {
  places: Place[];
}

export interface Place {
  //place: 'arany' | 'astoria_a' | 'astoria_b' | null;
  place: string | null;
  days: Day[];
}

export interface Day {
  //day: 'monday_wednesday' | 'tuesday_thursday' | 'friday' | null;
  day: string | null;
  classes: Class[];
}

export interface Class {
  id: string | null;
  agelimit: string;
  description: string;
  teacher: string;
  time: string;
}
