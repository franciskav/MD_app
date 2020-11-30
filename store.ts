import { AnyAction, combineReducers, Reducer } from 'redux';
import { applyReducer } from './src/store/apply/apply.reducer';
import { ApplyStore } from './src/store/apply/apply.store';
import { loginReducer } from './src/store/login/login.reducer';
import { LoginStore } from './src/store/login/login.store';
import { logoutReducer } from './src/store/logout/logout.reducer';
import { LogoutStore } from './src/store/logout/logout.store';
import { newsReducer } from './src/store/news/news.reducer';
import { NewsStore } from './src/store/news/news.store';
import { signupReducer } from './src/store/signup/signup.reducer';
import { SignupStore } from './src/store/signup/signup.store';
import { timetableReducer } from './src/store/timetable/timetable.reducer';
import { TimetableStore } from './src/store/timetable/timetable.store';

export interface IAppStore {
  login: LoginStore;
  signup: SignupStore;
  logout: LogoutStore;
  news: NewsStore;
  timetable: TimetableStore;
  apply: ApplyStore;
}

export interface IApplicationState {
  app: IAppStore;
}

export const RESET_EVERYTHING = 'RESET_EVERYTHING';

export interface ResetAction {
  type: typeof RESET_EVERYTHING;
}

export const reset = (): ResetAction => ({
  type: RESET_EVERYTHING
});

export const appReducer = combineReducers<IAppStore>({
  login: loginReducer,
  signup: signupReducer,
  logout: logoutReducer,
  news: newsReducer,
  timetable: timetableReducer,
  apply: applyReducer
});

export const appRootReducer: Reducer<IAppStore> = (
  state: IAppStore | undefined,
  action: AnyAction
): IAppStore => {
  if (action.type === RESET_EVERYTHING) {
    state = undefined;
  }
  return appReducer(state, action);
};
