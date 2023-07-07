import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Metrics} from '../theme';

type ForecastToggleOverlayProps = {
  currentRoute: string;
};

const ForecastToggleOverlay: React.FC<ForecastToggleOverlayProps> = ({
  currentRoute,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.overlay}>
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
    </View>
  );
};

ForecastToggleOverlay.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggleOverlay;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
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
