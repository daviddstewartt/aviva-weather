import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../../theme';

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

export default styles;
