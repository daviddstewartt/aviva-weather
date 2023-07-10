import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Metrics} from '../../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type WeatherOverviewPillProps = {
  rain: number;
  feelsLike: number;
  wind: number;
  style?: ViewStyle;
};

const WeatherOverviewPill: React.FC<WeatherOverviewPillProps> = ({
  rain,
  feelsLike,
  wind,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.pillItem}>
        <FontAwesome5 name="cloud-rain" size={14} color={Colors.LIGHT} />
        <Text style={styles.pillText}>{rain}%</Text>
      </View>
      <View style={styles.pillItem}>
        <FontAwesome5 name="temperature-low" size={14} color={Colors.LIGHT} />
        <Text style={styles.pillText}>{feelsLike}°</Text>
      </View>
      <View style={styles.pillItem}>
        <FontAwesome5 name="wind" size={14} color={Colors.LIGHT} />
        <Text style={styles.pillText}>{wind} m/s</Text>
      </View>
    </View>
  );
};

export default WeatherOverviewPill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.circle,
    paddingVertical: Metrics.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pillItem: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillText: {
    marginLeft: Metrics.spacing.m,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
});
