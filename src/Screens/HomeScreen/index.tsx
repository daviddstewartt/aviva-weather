import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICity} from '../../ts/interfaces';

// Redux
import {RootState} from '../../redux/store';
import {requestForecastData} from '../../redux/features/forecast';

// Styles
import {Colors, Metrics} from '../../theme';

// Components
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';
import HourlyForecast from './Components/HourlyForecast';
import HomeForecastError from './Components/HomeForecastError';
import CurrentForecastTiles from './Components/CurrentForecastTiles';
import CurrentWeather from './Components/CurrentWeather';
import { SafeAreaView } from 'react-native-safe-area-context';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();
  const forecast = useSelector((state: RootState) => state.forecast);
  const {selectedCity, isLoading, permissionsGranted} = useSelector(
    (state: RootState) => state.location,
  );

  useEffect(() => {
    // Get forecast data once finished loading
    if (!isLoading && selectedCity) {
      dispatch(requestForecastData(selectedCity as ICity));
    }
  }, [isLoading, selectedCity]);

  return (
    <SafeAreaView 
      style={[
        styles.container, 
        {paddingTop: permissionsGranted ? 190 : 220}
      ]}>
      {!isLoading ? (
        <ErrorHandlerUI>
          <ScrollView
            contentContainerStyle={{paddingBottom: 100}}
            style={{
              paddingHorizontal: Metrics.spacing.l,
              paddingTop: Metrics.spacing.l,
            }}>
            {forecast.error && <HomeForecastError error={forecast.error} />}

            {!forecast.error && (
              <Fragment>
                <CurrentWeather />

                {forecast.hourly && (
                  <HourlyForecast forecast={forecast.hourly} />
                )}
                {forecast.current && (
                  <CurrentForecastTiles forecast={forecast.current} />
                )}
              </Fragment>
            )}
          </ScrollView>
        </ErrorHandlerUI>
      ) : (
        <ActivityIndicator size="large" color={Colors.PURPLE_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
});
