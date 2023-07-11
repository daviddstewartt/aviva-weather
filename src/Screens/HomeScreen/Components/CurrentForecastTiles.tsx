import {StyleSheet, View} from 'react-native';
import React from 'react';
import {metersToMiles} from '../../../util/units';
import {IForecastCurrent} from '../../../ts/interfaces';

import {Metrics} from '../../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tile, {Tile as TileType} from './Tile';

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
      icon: <FontAwesome5 name="temperature-high" size={20} />,
      value: `${parseInt(feels_like.toString(), 10)}°`,
      desc: 'Simialar to what the actual temp is',
    },
    {
      title: 'Humidity',
      icon: <MaterialCommunityIcons name="water-opacity" size={25} />,
      value: humidity,
      desc: `With a dew point of ${dew_point}°`,
      symbol: '%',
    },
    {
      title: 'Wind',
      icon: <FontAwesome5 name="wind" size={20} />,
      value: wind_speed,
      symbol: 'm/s',
    },
    {
      title: 'Pressure',
      icon: <MaterialCommunityIcons name="gauge" size={20} />,
      value: pressure,
      symbol: 'hPa',
    },
    {
      title: 'Visibility',
      icon: <MaterialCommunityIcons name="eye" size={20} />,
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
