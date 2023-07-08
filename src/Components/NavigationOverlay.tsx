import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';

// Components
import ForecastToggle from './ForecastToggle';
import SearchLocationsInput from './SearchLocationsInput';
import {Metrics} from '../theme';
import SavedLocations from './SavedLocations';

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
      <View style={{alignItems: 'center', width: '100%'}}>
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
          <SavedLocations onClose={() => setShowSavedLocations(false)} />
        )}
      </View>

      {/* Save Locations Overlay Toggle */}
      {showForecastToggle && (
        <View style={styles.bottomNavContainer}>
          <TouchableOpacity
            onPress={() => setShowSavedLocations(!showSavedLocations)}>
            <View style={styles.menuHeaderContainer}>
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
  bottomNavContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingVertical: Metrics.spacing.l,
  },
});
