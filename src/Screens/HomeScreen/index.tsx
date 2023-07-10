import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors} from '../../theme';
import ErrorHandlerUI from './ErrorHandlerUI';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {selectedCity, isLoading} = useSelector(
    (state: RootState) => state.location,
  );

  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Text style={{marginTop: 260}}>Selected City: {selectedCity?.name}</Text>
      <Text>isLoading: {isLoading.toString()}</Text>
      {/* <Text>Current Location: {JSON.stringify(selectedCity)}</Text> */}
      {/* <Text>{JSON.stringify(currentLocation)}</Text> */}

      <ErrorHandlerUI>
        <Text>Children</Text>
      </ErrorHandlerUI>
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
