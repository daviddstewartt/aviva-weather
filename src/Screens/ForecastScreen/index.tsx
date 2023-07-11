import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// Redux
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

// Styles
import {Colors, Metrics} from '../../theme';

// Components
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';
import ForecastTimetable from './Components/ForecastTimetable';
import ForecastError from './Components/ForecastError';

type ForecastScreenProps = {};

const ForecastScreen: React.FC<ForecastScreenProps> = () => {
  const location = useSelector((state: RootState) => state.location);
  const forecast = useSelector((state: RootState) => state.forecast);

  return (
    <View
      style={[
        styles.container,
        {paddingTop: location.permissionsGranted ? 190 : 220},
      ]}>
      {!(location.isLoading || forecast.isLoading) ? (
        <ErrorHandlerUI>
          <ScrollView
            contentContainerStyle={{paddingBottom: 100}}
            style={{
              paddingHorizontal: Metrics.spacing.l,
              paddingTop: Metrics.spacing.l,
            }}>
            {forecast.error && <ForecastError error={forecast.error} />}

            {!forecast.error && forecast.daily && (
              <ForecastTimetable
                forecast={forecast.daily}
                style={{marginTop: Metrics.spacing.m}}
              />
            )}
          </ScrollView>
        </ErrorHandlerUI>
      ) : (
        <ActivityIndicator size="large" color={Colors.PURPLE_PRIMARY} />
      )}
    </View>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
});
