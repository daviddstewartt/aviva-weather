import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {requestLocationPermission} from './LocationPermissionsWrapper';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {addCityToSaved, removeCityFromSaved} from '../redux/features/location';

// Styles & Icons
import {Colors, Metrics} from '../theme';

// Components
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

type BottomNavigationBarProps = {
  onShowSavedLocations: () => void;
};

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  onShowSavedLocations,
}) => {
  const dispatch = useDispatch();
  const {savedCities, selectedCity} = useSelector(
    (state: RootState) => state.location,
  );
  const [isCurrentLocationSaved, setIsCurrentLocationSaved] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const isSaved = savedCities.some(city => city.id === selectedCity.id);
      setIsCurrentLocationSaved(isSaved);
    }
  }, [savedCities, selectedCity]);

  const setcurrentLocationAsSelected = () => {
    requestLocationPermission();
  };

  const onAddToSavedLocations = () => {
    if (selectedCity) {
      dispatch(addCityToSaved(selectedCity));
    }
  };

  const onRemoveFromSavedLocations = () => {
    if (selectedCity && selectedCity.id) {
      dispatch(removeCityFromSaved(selectedCity.id));
    }
  };

  return (
    <LinearGradient
      colors={[Colors.SPACE_GREY_PRIMARY, 'transparent']}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      style={styles.container}>
      <View style={styles.bottomNavContainer}>
        {/* This button will change to current location */}

        <TouchableOpacity onPress={() => setcurrentLocationAsSelected()}>
          <FontAwesome5 name="location-arrow" size={20} color={Colors.LIGHT} />
        </TouchableOpacity>

        {/* This button shows saved cities */}
        <TouchableOpacity onPress={() => onShowSavedLocations()}>
          <View>
            {/* Change to icon */}
            <Text style={styles.text}>Saved Locations</Text>
          </View>
        </TouchableOpacity>

        {/* This button add to saved lists */}
        <TouchableOpacity
          disabled={!selectedCity}
          onPress={() =>
            !isCurrentLocationSaved
              ? onAddToSavedLocations()
              : onRemoveFromSavedLocations()
          }>
          <Ionicons
            name={
              isCurrentLocationSaved ? 'md-bookmark' : 'md-bookmark-outline'
            }
            size={30}
            color={
              !isCurrentLocationSaved ? Colors.LIGHT : Colors.PURPLE_PRIMARY
            }
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: Metrics.spacing.l,
  },
  text: {
    color: Colors.LIGHT,
    fontWeight: 'bold',
  },
});
