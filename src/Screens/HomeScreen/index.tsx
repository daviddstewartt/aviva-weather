import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {requestLocationPermission} from '../../Components/LocationPermissionsWrapper';
import LocationSettingsLink from '../../Components/LocationSettingsLink';
import {Colors} from '../../theme';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {selectedCity, currentLocation, permissionsGranted} = useSelector(
    (state: RootState) => state.location,
  );

  useEffect(() => {
    // if the user hasnt given permissions, ask for them
    if (!permissionsGranted) {
      // requestLocationPermission();
      requestLocationPermission();
    }
  }, [permissionsGranted]);

  /**
   * @todo When permissions are denied, show a message to the user to go to settings
   * @todo When theres no selectedCity, use the users current city
   * @todo get the users current city
   */
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Text style={{marginTop: 260}}>Selected City: {selectedCity?.name}</Text>
      <Text>locaotion Permissoin: {permissionsGranted.toString()}</Text>
      {/* <Text>Current Location: {JSON.stringify(selectedCity)}</Text> */}
      {/* <Text>{JSON.stringify(currentLocation)}</Text> */}

      {!permissionsGranted && <LocationSettingsLink />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
});
