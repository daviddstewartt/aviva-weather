import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.rounded2,
    paddingBottom: Metrics.spacing.m,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.spacing.l,
    paddingVertical: Metrics.spacing.m,
  },
  headerTitle: {
    color: Colors.TEXT_LIGHT,
    fontSize: Fonts.size.m,
    fontWeight: 'bold',
  },
});

export default styles;
