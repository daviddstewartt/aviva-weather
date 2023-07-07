import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Metrics} from '../theme';

type ForecastToggleProps = {
  currentRoute: string;
};

const ForecastToggle: React.FC<ForecastToggleProps> = ({currentRoute}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.forecastToggleContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={[
          styles.toggleItem,
          currentRoute === 'Home' && styles.toggleItemActive,
        ]}>
        <Text>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Forecast')}
        style={[
          styles.toggleItem,
          currentRoute === 'Forecast' && styles.toggleItemActive,
        ]}>
        <Text>Forecast</Text>
      </TouchableOpacity>
    </View>
  );
};

ForecastToggle.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggle;

const styles = StyleSheet.create({
  forecastToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.AVIVA_YELLOW,
    padding: Metrics.spacing.s,
    borderRadius: Metrics.radius.circle,
    marginTop: Metrics.spacing.l,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleItem: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
  },
  toggleItemActive: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
    borderRadius: Metrics.radius.circle,
    backgroundColor: Colors.AVIVA_BLUE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
});
