import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.circle,
    paddingVertical: Metrics.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pillItem: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillText: {
    marginLeft: Metrics.spacing.m,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
});

export default styles;
