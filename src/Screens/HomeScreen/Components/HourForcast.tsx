import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IForecastHourly} from '../../../ts/interfaces';
import {formatTime} from '../../../util/datetime';
import WeatherIcon from '../../../Components/WeatherIcon';
import {Colors, Fonts, Metrics} from '../../../theme';
import LinearGradient from 'react-native-linear-gradient';
import {mainToColourGradient} from '../../../data/Weather';

type HourForcastProps = {
  active: boolean;
  forcast: IForecastHourly;
  onSelect: () => void;
};

const HourForcast: React.FC<HourForcastProps> = ({
  forcast,
  active,
  onSelect,
}) => {
  return (
    <LinearGradient
      colors={
        active
          ? //   ? [Colors.PURPLE_PRIMARY + '70', Colors.PURPLE_SECONDARY + '70']
            [...mainToColourGradient(forcast.weather[0].main).gradient]
          : ['transparent', 'transparent']
      }
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{borderRadius: Metrics.radius.rounded2}}>
      <TouchableOpacity style={[styles.container]} onPress={() => onSelect()}>
        <Text style={[styles.forecastTemp, active && {color: Colors.LIGHT}]}>
          {parseInt(forcast.temp.toString(), 10)}°
        </Text>

        <WeatherIcon icon={forcast.weather[0].icon} width={60} height={60} />
        <Text style={styles.forecastTime}>{formatTime(forcast.dt)}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HourForcast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.spacing.m,
  },
  forecastTime: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.size.m,
  },
  forecastTemp: {
    // color: Colors.PURPLE_PRIMARY,
    color: Colors.LIGHT_GREY,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
