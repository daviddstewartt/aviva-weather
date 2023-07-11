import {Image} from 'react-native';
import React from 'react';
import {isDayTime} from '../util/datetime';
import {IconIdToVectorIconName} from '../data/Weather';
import {Colors} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type WeatherIconProps = {
  icon: string;
  width?: number;
  height?: number;
  color?: string;
  useVectorIcons?: boolean;
};
const WeatherIcon: React.FC<WeatherIconProps> = ({
  icon,
  width,
  height,
  color,
  useVectorIcons,
}) => {
  const getImageURI = (): string => {
    const dir = isDayTime() ? 'w' : 'wn'; // w for day icons, wn for night icons
    return `http://openweathermap.org/img/${dir}/${icon}.png`;
  };

  let iconSource = useVectorIcons
    ? IconIdToVectorIconName(icon)
    : getImageURI();
  if (useVectorIcons && iconSource) {
    return (
      <MaterialCommunityIcons name={iconSource} size={width} color={color} />
    );
  }
  return <Image source={{uri: iconSource}} style={{width, height}} />;
};

WeatherIcon.defaultProps = {
  width: 50,
  height: 50,
  color: Colors.DARK,
  useVectorIcons: true,
};

export default WeatherIcon;
