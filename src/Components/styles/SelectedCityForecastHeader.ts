import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.spacing.l,
  },
  locationContainer: {
    maxWidth: width - Metrics.spacing.l * 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.TEXT_LIGHT,
    paddingRight: Metrics.spacing.m,
    marginRight: Metrics.spacing.m,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  text: {
    fontSize: Fonts.size.m,
    fontWeight: 'bold',
    color: Colors.TEXT_LIGHT,
  },
  titleContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  degContainer: {},

  refreshButton: {
    position: 'absolute',
    right: Metrics.spacing.l,
    top: Metrics.spacing.l,
  },
  locationPermissionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.spacing.m,
    paddingVertical: Metrics.spacing.s,
    backgroundColor: Colors.SPACE_GREY_SECONDARY + '50',
    borderRadius: Metrics.radius.circle,
    marginTop: Metrics.spacing.s,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: Metrics.radius.circle,
    backgroundColor: Colors.PURPLE_PRIMARY,
  },
  locationPermissionText: {
    color: Colors.LIGHT_GREY,
    fontSize: Fonts.size.xs,
    marginLeft: Metrics.spacing.s,
  },
});

export default styles;
