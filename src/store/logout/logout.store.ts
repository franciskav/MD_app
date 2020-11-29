export interface LogoutStore {
  isLoading: boolean;
  error: string | undefined;
}

export const initialLogoutStore: LogoutStore = {
  isLoading: false,
  error: undefined
};
