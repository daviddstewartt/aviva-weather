import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors} from '../../theme';
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {selectedCity, isLoading} = useSelector(
    (state: RootState) => state.location,
  );

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
