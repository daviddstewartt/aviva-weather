import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: Metrics.spacing.m,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: Colors.TEXT_LIGHT,
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    color: Colors.LIGHT_GREY,
    fontSize: 16,
  },
  hiloText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
