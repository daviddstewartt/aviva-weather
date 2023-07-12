export interface LayoutState {
  savedLocationIsListView: boolean;
  showForecastToggle: boolean;
  showSavedLocations: boolean;
}

const initialState: LayoutState = {
  savedLocationIsListView: true,
  showForecastToggle: true,
  showSavedLocations: false,
};

export default initialState;
