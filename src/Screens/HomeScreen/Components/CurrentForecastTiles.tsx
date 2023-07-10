import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IForecastCurrent} from '../../../ts/interfaces';
import Tile, {Tile as TileType} from './Tile';
import {Metrics} from '../../../theme';
import {metersToMiles} from '../../../util/units';

type CurrentForecastTilesProps = {
  forecast: IForecastCurrent;
};

const CurrentForecastTiles: React.FC<CurrentForecastTilesProps> = ({
  forecast,
}) => {
  const {
    feels_like,
    humidity,
    wind_speed,
    pressure,
    visibility,
    uvi,
    sunset,
    sunrise,
    dew_point,
  } = forecast;
  const tiles: TileType[] = [
    {
      title: 'Feels like',
      value: `${parseInt(feels_like.toString(), 10)}°`,
      desc: 'Simialar to what the actual temp is',
    },
    {
      title: 'Humidity',
      value: humidity,
      desc: `With a dew point of ${dew_point}°`,
      symbol: '%',
    },
    {
      title: 'Wind',
      value: wind_speed,
      symbol: 'm/s',
    },
    {
      title: 'Pressure',
      value: pressure,
      symbol: 'hPa',
    },
    {
      title: 'Visibility',
      value: metersToMiles(visibility),
      symbol: 'mi',
    },
  ];

  return (
    <View style={styles.container}>
      {tiles.map((_tile, index) => (
        <Tile key={index} tile={_tile} />
      ))}
    </View>
  );
};

export default CurrentForecastTiles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.spacing.l,
    flexWrap: 'wrap',
  },
});
