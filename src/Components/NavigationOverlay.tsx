import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';

// Styles
import {Metrics} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

// Components
import ForecastToggle from './ForecastToggle';
import SearchLocationsInput from './SearchLocationsInput';
import SavedLocations from './SavedLocations';
import SelectedCityForecastHeader from './SelectedCityForecastHeader';

type ForecastToggleOverlayProps = {
  currentRoute: string;
};

const ForecastToggleOverlay: React.FC<ForecastToggleOverlayProps> = ({
  currentRoute,
}) => {
  const [showForecastToggle, setShowForecastToggle] = useState<boolean>(true);
  const [showSavedLocations, setShowSavedLocations] = useState<boolean>(false);

  return (
    <View
      style={[
        styles.overlay,
        {
          backgroundColor:
            !showForecastToggle || showSavedLocations ? '#00000080' : undefined,
        },
      ]}>
      <LinearGradient
        pointerEvents="none"
        colors={['#00000080', '#00000080', 'transparent']}
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
      {showForecastToggle && (
        <View style={styles.bottomNavContainer}>
          {/* This button will change to current location */}
          <TouchableOpacity onPress={() => {}}>
            <View>
              {/* Change to icon */}
              <Text style={{color: 'black'}}>Current Location</Text>
            </View>
          </TouchableOpacity>

          {/* This button shows saved cities */}
          <TouchableOpacity
            onPress={() => setShowSavedLocations(!showSavedLocations)}>
            <View>
              {/* Change to icon */}
              <Text style={{color: 'black'}}>Saved Locations</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

ForecastToggleOverlay.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggleOverlay;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 320,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomNavContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingVertical: Metrics.spacing.l,
  },
});
