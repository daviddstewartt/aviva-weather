import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {IForecastDaily} from '../../../ts/interfaces';
import {timestampToShortDate} from '../../../util/datetime';
import {Colors, Metrics} from '../../../theme';
import WeatherIcon from '../../../Components/WeatherIcon';
import WeatherOverviewPill from '../../HomeScreen/Components/WeatherOverviewPill';

type TimetableRowItemProps = {
  day: IForecastDaily;
  style?: ViewStyle;
};

const TimetableRowItem: React.FC<TimetableRowItemProps> = ({day, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.row,
          {justifyContent: 'space-between', marginBottom: Metrics.spacing.s},
        ]}>
        <View style={styles.row}>
          <WeatherIcon icon={day.weather[0].icon} />
          <View style={{marginLeft: Metrics.spacing.s}}>
            <Text style={styles.date}>{timestampToShortDate(day.dt)}</Text>
            <Text style={styles.desc}>{day.weather[0].description}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.hiloText}>
            {parseInt(day.temp.min.toString(), 10)}° /{' '}
          </Text>
          <Text style={styles.hiloText}>
            {parseInt(day.temp.max.toString(), 10)}°
          </Text>
        </View>
      </View>
      <WeatherOverviewPill
        rain={day.rain || 0}
        feelsLike={parseInt(day.feels_like.day.toString(), 10)}
        wind={day.wind_speed}
        style={{backgroundColor: Colors.SPACE_GREY_SECONDARY}}
      />
    </View>
  );
};

export default TimetableRowItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: Metrics.spacing.m,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: Colors.TEXT_LIGHT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    color: Colors.LIGHT_GREY,
    fontSize: 16,
  },
  hiloText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
