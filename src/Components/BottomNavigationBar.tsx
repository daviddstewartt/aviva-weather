import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

// Styles & Icons
import {Colors, Metrics} from '../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addCityToSaved, removeCityFromSaved} from '../redux/features/location';
import {requestLocationPermission} from './LocationPermissionsWrapper';

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
    <View style={styles.bottomNavContainer}>
      {/* This button will change to current location */}

      <TouchableOpacity onPress={() => setcurrentLocationAsSelected()}>
        <FontAwesome5 name="location-arrow" size={20} color="black" />
      </TouchableOpacity>

      {/* This button shows saved cities */}
      <TouchableOpacity onPress={() => onShowSavedLocations()}>
        <View>
          {/* Change to icon */}
          <Text style={{color: 'black'}}>Saved Locations</Text>
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
          name={isCurrentLocationSaved ? 'md-bookmark' : 'md-bookmark-outline'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
  bottomNavContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.AVIVA_BLUE,
    paddingVertical: Metrics.spacing.l,
  },
});
