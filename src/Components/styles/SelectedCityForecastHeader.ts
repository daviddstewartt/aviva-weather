import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: Metrics.spacing.l,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.m,
    alignSelf: 'center',
  },
  locationTitle: {
    fontSize: Fonts.size.l,
    color: Colors.TEXT_LIGHT,
  },
  weatherDesc: {
    color: Colors.TEXT_LIGHT,
    marginBottom: Metrics.spacing.s,
  },
  currentWeatherContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: Metrics.spacing.m,
  },
  currentTemp: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
  },
  minMaxTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: Metrics.spacing.s,
    paddingHorizontal: Metrics.spacing.m,
    borderRadius: Metrics.radius.circle,
  },
});

export default styles;
