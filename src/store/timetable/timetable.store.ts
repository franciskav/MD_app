import { Timetable } from '../../model/timetable/timetable';

export interface TimetableStore {
  isLoading: boolean;
  error: string | undefined;
  timetable: Timetable;
}

export const initialTimetable: Timetable = {
  places: []
};

export const initialTimetableStore: TimetableStore = {
  isLoading: false,
  error: undefined,
  timetable: initialTimetable
};
