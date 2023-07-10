import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

// Redux
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

// Styles
import {Colors, Metrics} from '../../theme';

// Components
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';
import HourlyForecast from '../HomeScreen/Components/HourlyForecast';

type ForecastScreenProps = {};

const ForecastScreen: React.FC<ForecastScreenProps> = () => {
  const location = useSelector((state: RootState) => state.location);
  const forecast = useSelector((state: RootState) => state.forecast);

  return (
    <View style={styles.container}>
      {!(location.isLoading || forecast.isLoading) ? (
        <ErrorHandlerUI>
          <ScrollView
            style={{
              paddingHorizontal: Metrics.spacing.l,
              paddingTop: Metrics.spacing.l,
            }}>
            {forecast.error && <Text>{forecast.error}</Text>}

            {!forecast.error && forecast.hourly && (
              <HourlyForecast forecast={forecast.hourly} />
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
    paddingTop: 300,
  },
});
