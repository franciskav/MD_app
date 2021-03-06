export interface Timetable {
  places: Place[];
}

export interface Place {
  place: string | null;
  days: Day[];
}

export interface Day {
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
