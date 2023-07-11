import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICity} from '../ts/interfaces';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {requestSelectedCityWeather} from '../redux/features/location';

// Styles & Icons
import styles from './styles/SelectedCityForecastHeader';
import {Colors} from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import LinearGradient from 'react-native-linear-gradient';

type SelectedCityForecastHeaderProps = {};

const SelectedCityForecastHeader: React.FC<
  SelectedCityForecastHeaderProps
> = () => {
  const dispatch = useDispatch();
  const {selectedCity, isLoading, permissionsGranted} = useSelector(
    (state: RootState) => state.location,
  );

  const handleRefreshLocationData = () => {
    dispatch(requestSelectedCityWeather(selectedCity as ICity));
  };

  return selectedCity ? (
    <View style={{width: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#00000050', 'transparent']}>
        <View style={styles.headerContainer}>
          <View
            style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            {selectedCity && (
              <View style={styles.locationContainer}>
                <View style={styles.titleContainer}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.text, styles.title]}>
                    {selectedCity.name}
                  </Text>
                </View>
                <View style={styles.degContainer}>
                  <Text style={[styles.text]}>
                    {parseInt(selectedCity.weather.main.temp.toString(), 10)}°
                  </Text>
                </View>
              </View>
            )}
            {!selectedCity && isLoading && (
              <View style={styles.locationContainer}>
                <Text style={styles.text}>Loading...</Text>
              </View>
            )}
            {!permissionsGranted && (
              <View style={styles.locationPermissionContainer}>
                <View style={styles.dot} />
                <Text style={styles.locationPermissionText}>
                  Turn on location services
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            disabled={isLoading || !selectedCity}
            onPress={handleRefreshLocationData}
            style={styles.refreshButton}>
            <Ionicons name={'md-refresh'} size={20} color={Colors.TEXT_LIGHT} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  ) : null;
};

export default SelectedCityForecastHeader;
