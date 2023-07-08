import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {requestSelectedCityWeather} from '../redux/features/location';
import {ICity} from '../ts/interfaces';
import {formatTime} from '../util/datetime';

// Styles & Icons
import {Colors, Fonts, Metrics} from '../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SelectedCityForecastHeaderProps = {};

const SelectedCityForecastHeader: React.FC<
  SelectedCityForecastHeaderProps
> = () => {
  const dispatch = useDispatch();
  const {selectedCity} = useSelector((state: RootState) => state.location);

  const getWeatherIconUrl = (iconCode: string | null): string => {
    return iconCode ? `http://openweathermap.org/img/w/${iconCode}.png` : '';
  };

  const handleRefreshLocationData = () => {
    dispatch(requestSelectedCityWeather(selectedCity as ICity));
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.minMaxTempContainer}>
              <FontAwesome5
                name={'temperature-high'}
                size={16}
                color={'white'}
              />
              <Text
                style={{
                  color: Colors.AVIVA_YELLOW,
                  marginLeft: Metrics.spacing.m,
                }}>
                {selectedCity?.weather.main.temp_min}°C /{' '}
                {selectedCity?.weather.main.temp_max}°C
              </Text>
            </View>
            {selectedCity && (
              <TouchableOpacity
                onPress={handleRefreshLocationData}
                style={{marginLeft: Metrics.spacing.m}}>
                <Ionicons
                  name={'md-refresh'}
                  size={20}
                  color={Colors.TEXT_LIGHT}
                />
              </TouchableOpacity>
            )}
          </View>
          <Text style={{fontSize: Fonts.size.xs}}>
            Last updated: {formatTime(selectedCity?.timestamp)}
          </Text>
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
