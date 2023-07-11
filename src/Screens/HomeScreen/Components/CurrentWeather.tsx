import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

import styles from './styles/CurrentWeather';
import {Colors, Metrics} from '../../../theme';

const CurrentWeather = () => {
  const {selectedCity} = useSelector((state: RootState) => state.location);
  return selectedCity ? (
    <View style={styles.container}>
      <Text style={styles.cityTitle}>{selectedCity?.name}</Text>
      <Text style={styles.temp}>
        {parseInt(selectedCity?.weather.main.temp.toString(), 10)}
      </Text>
      <Text style={styles.text}>{selectedCity?.weather.weather[0].main}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Hi lo */}
        <Text style={[styles.hiloText, {marginRight: Metrics.spacing.s}]}>
          {parseInt(selectedCity?.weather.main.temp_max.toString(), 10)}°
        </Text>
        <Text style={styles.hiloText}>
          {parseInt(selectedCity?.weather.main.temp_min.toString(), 10)}°
        </Text>
      </View>
    </View>
  ) : (
    <ActivityIndicator size={50} color={Colors.PURPLE_SECONDARY} />
  );
};

export default CurrentWeather;
