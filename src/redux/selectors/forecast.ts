import {
  IForecastAlert,
  IForecastCurrent,
  IForecastDaily,
  IForecastHourly,
} from '../../ts/interfaces';
export interface ForecastState {
  hourly: IForecastHourly[] | null;
  daily: IForecastDaily[] | null;
  current: IForecastCurrent | null;
  alert: IForecastAlert | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ForecastState = {
  hourly: null,
  daily: null,
  current: null,
  alert: null,
  isLoading: false,
  error: null,
};

export default initialState;
