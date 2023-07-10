import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  forecastToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: Colors.AVIVA_YELLOW,
    padding: Metrics.spacing.s,
    borderRadius: Metrics.radius.circle,
    // marginTop: Metrics.spacing.l,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleItem: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
  },
  toggleItemActive: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
    borderRadius: Metrics.radius.circle,
    backgroundColor: Colors.PURPLE_PRIMARY,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: Colors.LIGHT_GREY,
    fontWeight: 'bold',
  },
  activeText: {
    color: Colors.LIGHT,
  },
});

export default styles;
