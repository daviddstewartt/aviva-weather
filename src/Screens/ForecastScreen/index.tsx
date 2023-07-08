import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {getSelectedCityForecast} from '../../util/location';
import {Config} from '../../../config';
import {IForecast} from '../../ts/interfaces';

type ForecastScreenProps = {};

const ForecastScreen: React.FC<ForecastScreenProps> = () => {
  const {selectedCity} = useSelector((state: RootState) => state.location);
  const [forecast, setForecast] = useState<IForecast | null>(null);

  useEffect(() => {
    if (selectedCity) {
      // get forecast data
      const fetchWeatherForecast = async () => {
        try {
          const selectedForecast = await getSelectedCityForecast(
            Config.OPEN_WEATHER_MAP_API_KEY,
          );
          setForecast(selectedForecast);
        } catch (error) {
          console.log('error fetching forecast', error);
        }
      };

      fetchWeatherForecast();
    }
  }, [selectedCity]);

  return (
    <View>
      <Text>ForecastScreen</Text>

      <Text style={{marginTop: 200}}>Selected City: {selectedCity?.name}</Text>
      <Text>forecast data: {JSON.stringify(forecast)}</Text>
    </View>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({});
