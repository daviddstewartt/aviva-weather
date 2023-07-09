import {AppStateStatus} from 'react-native';

export interface AppState {
  appState: AppStateStatus;
  requestingLocation: boolean;
}

const initialState: AppState = {
  appState: 'background',
  requestingLocation: false,
};

export default initialState;
