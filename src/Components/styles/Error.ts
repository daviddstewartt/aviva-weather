import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Metrics.spacing.m,
    color: Colors.TEXT_LIGHT,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.LIGHT_GREY,
  },
});

export default styles;
