import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Styles
import styles from './styles/ForecastToggle';
import {Colors, Metrics} from '../theme';

// Components
import LinearGradient from 'react-native-linear-gradient';

type ForecastToggleProps = {
  currentRoute: string;
};

const ForecastToggle: React.FC<ForecastToggleProps> = ({currentRoute}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.SPACE_GREY_PRIMARY, Colors.SPACE_GREY_SECONDARY]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        borderRadius: Metrics.radius.circle,
        marginTop: Metrics.spacing.l,
      }}>
      <View style={styles.forecastToggleContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[
            styles.toggleItem,
            currentRoute === 'Home' && styles.toggleItemActive,
          ]}>
          <Text
            style={[styles.text, currentRoute === 'Home' && styles.activeText]}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forecast')}
          style={[
            styles.toggleItem,
            currentRoute === 'Forecast' && styles.toggleItemActive,
          ]}>
          <Text
            style={[
              styles.text,
              currentRoute === 'Forecast' && styles.activeText,
            ]}>
            Forecast
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

ForecastToggle.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggle;
