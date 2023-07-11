import {FlatList, StyleSheet, View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  formatTimestampToDate,
  timestampToShortDate,
} from '../../../util/datetime';
import {IForecastHourly} from '../../../ts/interfaces';

import {Colors, Fonts, Metrics} from '../../../theme';
import HourForcast from './HourForcast';
import WeatherOverviewPill from './WeatherOverviewPill';

type HourlyForecastProps = {
  forecast: IForecastHourly[];
};

const HourlyForecast: React.FC<HourlyForecastProps> = ({forecast}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedForecast, setSelectedForecast] = useState<IForecastHourly>(
    forecast[0],
  );
  return (
    <Fragment>
      {selectedForecast && (
        <WeatherOverviewPill
          rain={selectedForecast.rain?.['1h'] || 0}
          feelsLike={selectedForecast.feels_like}
          wind={selectedForecast.wind_speed}
          style={{marginBottom: Metrics.spacing.l}}
        />
      )}
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerDay}>
            {timestampToShortDate(selectedForecast.dt * 1000)}
          </Text>
          <Text style={styles.headerDate}>
            {formatTimestampToDate(selectedForecast.dt * 1000)}
          </Text>
        </View>

        <FlatList
          data={forecast}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: Metrics.spacing.m,
          }}
          renderItem={({item, index}) => (
            <HourForcast
              active={index === selectedIndex}
              forcast={item}
              onSelect={() => {
                setSelectedIndex(index);
                setSelectedForecast(item);
              }}
            />
          )}
          keyExtractor={item => item.dt.toString()}
        />
      </View>
    </Fragment>
  );
};

export default HourlyForecast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.rounded2,
    paddingBottom: Metrics.spacing.m,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.l,
    paddingVertical: Metrics.spacing.m,
  },
  headerDay: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.size.m,
    fontWeight: 'bold',
  },
  headerDate: {
    color: Colors.LIGHT_GREY,
  },
});
