import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type AppIcon = {
  applicationId: number;
  path: string;
}

export type Application = {
  id: number;
  path: string;
  name: string;
}

export type State = {
  appIcons: AppIcon[];
  applications: Application[];
  showSettings: boolean;
}

export type GetState = () => State;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<State, Action<string>>;
