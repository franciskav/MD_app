import { AnyAction, combineReducers, Reducer } from 'redux';
import { loginReducer } from './src/store/login/login.reducer';
import { LoginStore } from './src/store/login/login.store';
import { logoutReducer } from './src/store/logout/logout.reducer';
import { LogoutStore } from './src/store/logout/logout.store';
import { newsReducer } from './src/store/news/news.reducer';
import { NewsStore } from './src/store/news/news.store';
import { signupReducer } from './src/store/signup/signup.reducer';
import { SignupStore } from './src/store/signup/signup.store';

export interface IAppStore {
  login: LoginStore;
  signup: SignupStore;
  logout: LogoutStore;
  news: NewsStore;
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
  news: newsReducer
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
