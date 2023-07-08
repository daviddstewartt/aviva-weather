import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {selectedCity, currentLocation} = useSelector(
    (state: RootState) => state.location,
  );

  /**
   * @todo When permissions are denied, show a message to the user to go to settings
   * @todo When theres no selectedCity, use the users current city
   * @todo get the users current city
   */
  return (
    <View>
      <Text>Homescreen</Text>
      <Text style={{marginTop: 200}}>Selected City: {selectedCity?.name}</Text>
      <Text>Current Location: {JSON.stringify(selectedCity)}</Text>
      <Text>{JSON.stringify(currentLocation)}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
