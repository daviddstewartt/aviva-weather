import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Metrics} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

type ForecastToggleProps = {
  currentRoute: string;
};

const ForecastToggle: React.FC<ForecastToggleProps> = ({currentRoute}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.SPACE_GREY_PRIMARY, Colors.SPACE_GREY_SECONDARY]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        borderRadius: Metrics.radius.circle,
        marginTop: Metrics.spacing.l,
      }}>
      <View style={styles.forecastToggleContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[
            styles.toggleItem,
            currentRoute === 'Home' && styles.toggleItemActive,
          ]}>
          <Text
            style={[styles.text, currentRoute === 'Home' && styles.activeText]}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forecast')}
          style={[
            styles.toggleItem,
            currentRoute === 'Forecast' && styles.toggleItemActive,
          ]}>
          <Text
            style={[
              styles.text,
              currentRoute === 'Forecast' && styles.activeText,
            ]}>
            Forecast
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
    // backgroundColor: Colors.AVIVA_YELLOW,
    padding: Metrics.spacing.s,
    borderRadius: Metrics.radius.circle,
    // marginTop: Metrics.spacing.l,
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
    backgroundColor: Colors.PURPLE_PRIMARY,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: Colors.LIGHT_GREY,
    fontWeight: 'bold',
  },
  activeText: {
    color: Colors.LIGHT,
  },
});
