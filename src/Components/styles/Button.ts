import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  gradientContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  button: {
    display: 'flex',
    position: 'relative',
  },
  buttonText: {
    color: Colors.TEXT,
    fontWeight: 'bold',
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
  },
});

export default styles;
