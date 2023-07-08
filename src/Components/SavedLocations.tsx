import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Colors, Fonts, Metrics} from '../theme';
import {ICityWithWeather} from '../ts/interfaces';
import {setSelectedCity} from '../redux/features/location';

type SavedLocationsProps = {
  onClose: () => void;
  onShowSearchLocation: () => void;
};

const SavedLocations: React.FC<SavedLocationsProps> = ({
  onClose,
  onShowSearchLocation,
}) => {
  const dispatch = useDispatch();
  const {savedCities} = useSelector((state: RootState) => state.location);

  const handleSelectSavedLocation = (city: ICityWithWeather) => {
    dispatch(setSelectedCity(city));
    onClose();
  };

  return (
    <View style={{width: '100%', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Saved Locations</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>

      {/* List of saved Locations */}
      <View style={{backgroundColor: 'green', flex: 1}}>
        {savedCities.length >= 1 &&
          savedCities.map(city => (
            <TouchableOpacity
              key={city.id}
              onPress={() => handleSelectSavedLocation(city)}>
              <View>
                <Text>{city.name}</Text>
                <Text>{city.weather.main.temp}</Text>
                <Text>Feels like: {city.weather.main.feels_like}</Text>
              </View>
            </TouchableOpacity>
          ))}

        {savedCities.length === 0 && (
          <View>
            <Text>No Saved Locations</Text>
            <TouchableOpacity onPress={onShowSearchLocation}>
              <Text>Add Locations</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default SavedLocations;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrics.spacing.m,
  },
  headerText: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
  },
  closeButton: {
    position: 'absolute',
    right: Metrics.spacing.m,
    top: Metrics.spacing.m,
  },
});
