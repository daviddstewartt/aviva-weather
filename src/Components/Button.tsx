import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

// Styles
import styles from './styles/Button';
import {Metrics} from '../theme';

// Components
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
  title: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  onPress: () => void;
  gradientColors?: string[];
  bgColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  titleStyle,
  style,
  onPress,
  gradientColors,
  bgColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: Metrics.radius.circle,
        overflow: 'hidden',
        ...style,
      }}
      onPress={onPress}>
      <View
        style={[
          styles.button,

          {backgroundColor: bgColor ? bgColor : undefined},
        ]}>
        {gradientColors && (
          <LinearGradient
            colors={gradientColors || ['transparent', 'transparent']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientContainer}
          />
        )}
        <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
