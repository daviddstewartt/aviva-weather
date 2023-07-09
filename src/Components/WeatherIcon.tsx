import {Image} from 'react-native';
import React from 'react';
import {isDayTime} from '../util/datetime';

type WeatherIconProps = {
  icon: string;
  width?: number;
  height?: number;
};
/** @todo use react-native-icons and create relations between OpenWeatherMap codes and icons */
const WeatherIcon: React.FC<WeatherIconProps> = ({icon, width, height}) => {
  const getImageURI = (): string => {
    const dir = isDayTime() ? 'w' : 'wn'; // w for day icons, wn for night icons
    return `http://openweathermap.org/img/${dir}/${icon}.png`;
  };
  return <Image source={{uri: getImageURI()}} style={{width, height}} />;
};

WeatherIcon.defaultProps = {
  width: 50,
  height: 50,
};

export default WeatherIcon;
