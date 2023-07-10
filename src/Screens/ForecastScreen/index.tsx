import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Config} from '../../../config';
import {IForecast} from '../../ts/interfaces';

// Redux
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {getSelectedCityForecast} from '../../util/location';

// Styles
import {Colors} from '../../theme';

// Components
import ErrorHandlerUI from '../../Components/ErrorHandlerUI';

type ForecastScreenProps = {};

const ForecastScreen: React.FC<ForecastScreenProps> = () => {
  const {selectedCity, isLoading} = useSelector(
    (state: RootState) => state.location,
  );
  const [forecast, setForecast] = useState<IForecast | null>(null);
  const [isForecastLoading, setIsForecastLoading] = useState<boolean>(false);
  const [forecastError, setForecastError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCity) {
      // get forecast data
      const fetchWeatherForecast = async () => {
        setIsForecastLoading(true);
        try {
          const selectedForecast = await getSelectedCityForecast(
            Config.OPEN_WEATHER_MAP_API_KEY,
          );
          setForecast(selectedForecast);
          setIsForecastLoading(false);
          setForecastError(null);
        } catch (error) {
          console.log('error fetching forecast', error);
          setIsForecastLoading(false);
          setForecastError(error.message);
        }
      };

      fetchWeatherForecast();
    }
  }, [selectedCity]);

  return (
    <View style={styles.container}>
      {!(isLoading || isForecastLoading) ? (
        <ErrorHandlerUI>
          <Text>forecast</Text>
          {forecastError && <Text>{forecastError}</Text>}

          {!forecastError && forecast && (
            <Text>{JSON.stringify(forecast)}</Text>
          )}
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
