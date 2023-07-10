import {View} from 'react-native';
import React, {Fragment, useState} from 'react';
import {mainToColourGradient} from '../data/Weather';

// Redux
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

// styles
import styles from './styles/NavigationOverlay';

// Components
import ForecastToggle from './ForecastToggle';
import SearchLocationsInput from './SearchLocationsInput';
import SavedLocations from './SavedLocations';
import SelectedCityForecastHeader from './SelectedCityForecastHeader';
import BottomNavigationBar from './BottomNavigationBar';
import LinearGradient from 'react-native-linear-gradient';

type ForecastToggleOverlayProps = {
  currentRoute: string;
};

const ForecastToggleOverlay: React.FC<ForecastToggleOverlayProps> = ({
  currentRoute,
}) => {
  const mainWeatherCondition = useSelector(
    (state: RootState) => state.location.selectedCity?.weather.weather[0].main,
  );
  const [showForecastToggle, setShowForecastToggle] = useState<boolean>(true);
  const [showSavedLocations, setShowSavedLocations] = useState<boolean>(false);

  return (
    <View
      pointerEvents={'box-none'}
      style={[
        styles.overlay,
        {
          backgroundColor:
            !showForecastToggle || showSavedLocations ? '#00000080' : undefined,
        },
      ]}>
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

      {showForecastToggle && !showSavedLocations && (
        <SelectedCityForecastHeader />
      )}
      <View style={{alignItems: 'center', width: '100%', flex: 1}}>
        {!showSavedLocations && (
          <Fragment>
            <SearchLocationsInput
              onSearchResultsVisibility={visible =>
                setShowForecastToggle(!visible)
              }
            />
            {showForecastToggle && (
              <ForecastToggle currentRoute={currentRoute} />
            )}
          </Fragment>
        )}

        {/* Saved Locations Overlay */}
        {showSavedLocations && (
          <SavedLocations
            onClose={() => setShowSavedLocations(false)}
            onShowSearchLocation={() => {
              setShowSavedLocations(false);
              setShowForecastToggle(!showForecastToggle);
            }}
          />
        )}
      </View>

      {/* Save Locations Overlay Toggle */}
      {showForecastToggle && !showSavedLocations && (
        <BottomNavigationBar
          onShowSavedLocations={() =>
            setShowSavedLocations(!showSavedLocations)
          }
        />
      )}
    </View>
  );
};

ForecastToggleOverlay.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggleOverlay;
