import {TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import {mainToColourGradient} from '../data/Weather';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {
  setShowForecastToggle,
  setShowSavedLocations,
} from '../redux/features/layout';

// styles & Icons
import styles from './styles/NavigationOverlay';
import Entype from 'react-native-vector-icons/Entypo';

// Components
import ForecastToggle from './ForecastToggle';
import SearchLocationsInput from './SearchLocationsInput';
import SavedLocations from './SavedLocations';
import SelectedCityForecastHeader from './SelectedCityForecastHeader';
import BottomNavigationBar from './BottomNavigationBar';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type ForecastToggleOverlayProps = {
  currentRoute: string;
};

const ForecastToggleOverlay: React.FC<ForecastToggleOverlayProps> = ({
  currentRoute,
}) => {
  const dispatch = useDispatch();
  const {showSavedLocations, showForecastToggle} = useSelector(
    (state: RootState) => state.layout,
  );
  const mainWeatherCondition = useSelector(
    (state: RootState) => state.location.selectedCity?.weather.weather[0].main,
  );

  return (
    <Fragment>
      <LinearGradient
        pointerEvents={'auto'}
        colors={
          mainWeatherCondition && !(!showForecastToggle || showSavedLocations)
            ? [
                ...mainToColourGradient(mainWeatherCondition).gradient,
                'transparent',
              ]
            : ['#00000080', '#00000080', 'transparent']
        }
        style={styles.gradient}
      />

      <SafeAreaView
        style={[
          styles.headerContainer,
          {
            height: showForecastToggle ? 'auto' : '100%',
            backgroundColor: showForecastToggle ? 'transparent' : '#00000080',
          },
        ]}>
        {!showSavedLocations && (
          <SelectedCityForecastHeader showRefresh={showForecastToggle} />
        )}

        {!showSavedLocations && showForecastToggle && (
          <ForecastToggle currentRoute={currentRoute} />
        )}

        {!showSavedLocations && (
          <SearchLocationsInput
            onSearchResultsVisibility={visible =>
              dispatch(setShowForecastToggle(!visible))
            }
          />
        )}

        {/* Close search button */}
        {!showSavedLocations && !showForecastToggle && (
          <TouchableOpacity
            style={styles.searchCloseButton}
            onPress={() =>
              dispatch(setShowForecastToggle(!showForecastToggle))
            }>
            <Entype name="cross" size={30} color="#fff" />
          </TouchableOpacity>
        )}
        
      </SafeAreaView>

      {/* Saved Locations Overlay */}
      {showSavedLocations && (
        <SavedLocations
          onClose={() => dispatch(setShowSavedLocations(false))}
          onShowSearchLocation={() => {
            dispatch(setShowSavedLocations(false));
            dispatch(setShowForecastToggle(!showForecastToggle));
          }}
        />
      )}

      {!showSavedLocations && showForecastToggle && (
        <BottomNavigationBar
          onShowSavedLocations={() =>
            dispatch(setShowSavedLocations(!showSavedLocations))
          }
        />
      )}
    </Fragment>
  );
};

ForecastToggleOverlay.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggleOverlay;
