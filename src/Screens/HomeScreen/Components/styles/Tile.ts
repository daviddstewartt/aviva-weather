import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: Colors.SPACE_GREY_SECONDARY + '50',
    marginBottom: Metrics.spacing.m,
    paddingVertical: Metrics.spacing.l,
    paddingHorizontal: Metrics.spacing.l,
    borderRadius: Metrics.radius.rounded2,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PURPLE_SECONDARY + '60',
  },
  tileValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
  tileSymbol: {
    fontsize: 18,
    marginLeft: Metrics.spacing.s,
    color: Colors.LIGHT_GREY,
  },
  tileDesc: {
    fontSize: 12,
    color: Colors.LIGHT_GREY,
    marginTop: Metrics.spacing.m,
  },
});

export default styles;
