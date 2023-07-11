import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.spacing.l,
    marginBottom: Metrics.spacing.xl,
  },
  cityTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
  temp: {
    fontSize: 70,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PURPLE_SECONDARY,
  },
  hiloText: {
    fontSize: Fonts.size.m,
    color: Colors.LIGHT_GREY,
  },
});

export default styles;
