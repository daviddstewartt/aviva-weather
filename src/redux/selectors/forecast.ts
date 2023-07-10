import {IForecastDaily, IForecastHourly} from '../../ts/interfaces';
export interface ForecastState {
  hourly: IForecastHourly[] | null;
  daily: IForecastDaily[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ForecastState = {
  hourly: null,
  daily: null,
  isLoading: false,
  error: null,
};

export default initialState;
