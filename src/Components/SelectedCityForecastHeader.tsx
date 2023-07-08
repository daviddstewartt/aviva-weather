import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, Metrics} from '../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

// Styles & Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type SelectedCityForecastHeaderProps = {};

const SelectedCityForecastHeader: React.FC<
  SelectedCityForecastHeaderProps
> = () => {
  const {selectedCity} = useSelector((state: RootState) => state.location);

  const getWeatherIconUrl = (iconCode: string | null): string => {
    return iconCode ? `http://openweathermap.org/img/w/${iconCode}.png` : '';
  };

  return (
    <View style={{width: '100%'}}>
      <View style={styles.headerContainer}>
        {/* Current Weather icon ontop of Current Temp */}
        <View style={styles.currentWeatherContainer}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri:
                getWeatherIconUrl(selectedCity?.weather.weather[0].icon) ||
                null,
            }}
          />
          <Text style={styles.currentTemp}>
            {selectedCity?.weather.main.temp || '-'}°C
          </Text>
        </View>

        {/* Basic Location Data */}
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.locationTitle}>
            {selectedCity?.name || '---'}
          </Text>
          <Text style={styles.weatherDesc}>
            {selectedCity?.weather.weather[0].description || '---'}
          </Text>
          <View style={styles.minMaxTempContainer}>
            <FontAwesome5 name={'temperature-high'} size={16} color={'white'} />
            <Text
              style={{
                color: Colors.AVIVA_YELLOW,
                marginLeft: Metrics.spacing.m,
              }}>
              {selectedCity?.weather.main.temp_min}°C /{' '}
              {selectedCity?.weather.main.temp_max}°C
            </Text>
          </View>
          {/** @todo: Add a refresh button here  */}
        </View>
      </View>
    </View>
  );
};

export default SelectedCityForecastHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: Metrics.spacing.l,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.m,
    alignSelf: 'center',
  },
  locationTitle: {
    fontSize: Fonts.size.l,
    color: Colors.TEXT_LIGHT,
  },
  weatherDesc: {
    color: Colors.TEXT_LIGHT,
    marginBottom: Metrics.spacing.s,
  },
  currentWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: Metrics.spacing.m,
  },
  currentTemp: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
  },
  minMaxTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.AVIVA_BLUE,
    paddingVertical: Metrics.spacing.s,
    paddingHorizontal: Metrics.spacing.m,
    borderRadius: Metrics.radius.circle,
  },
});
