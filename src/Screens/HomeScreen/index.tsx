import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors} from '../../theme';
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';
import {requestForecastData} from '../../redux/features/forecast';
import {ICity} from '../../ts/interfaces';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();
  const {selectedCity, isLoading} = useSelector(
    (state: RootState) => state.location,
  );

  useEffect(() => {
    // Get forecast data once finished loading
    if (!isLoading && selectedCity) {
      dispatch(requestForecastData(selectedCity as ICity));
    }
  }, [isLoading, selectedCity]);

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <ErrorHandlerUI>
          <Text>{JSON.stringify(selectedCity)}</Text>
        </ErrorHandlerUI>
      ) : (
        <ActivityIndicator size="large" color={Colors.PURPLE_PRIMARY} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY,
    paddingTop: 300,
  },
});
