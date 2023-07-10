import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {IForecastDaily} from '../../../ts/interfaces';
import {Colors, Fonts, Metrics} from '../../../theme';
import TimetableRowItem from './TimetableRowItem';

type ForecastTimetableProps = {
  forecast: IForecastDaily[];
  style?: ViewStyle;
};

const ForecastTimetable: React.FC<ForecastTimetableProps> = ({
  forecast,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>5 Day Forecast</Text>
      </View>

      <View style={{paddingHorizontal: Metrics.spacing.l}}>
        {forecast.map((day, index) => {
          if (index > 4) {
            return;
          }
          return (
            <TimetableRowItem
              key={index}
              day={day}
              style={[
                index < 4 && {
                  borderBottomColor: Colors.SPACE_GREY_SECONDARY,
                  borderBottomWidth: 1,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ForecastTimetable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.rounded2,
    paddingBottom: Metrics.spacing.m,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.spacing.l,
    paddingVertical: Metrics.spacing.m,
  },
  headerTitle: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.size.m,
    fontWeight: 'bold',
  },
});
