import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.spacing.l,
    paddingHorizontal: Metrics.spacing.l,
  },
  headerText: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
  },
  flatListContentContainer: {
    paddingBottom: Metrics.spacing.m,
    marginTop: Metrics.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.spacing.m,
    width: width - Metrics.spacing.l,
  },
  emptyListCard: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.radius.rounded,
    overflow: 'hidden',
  },
  emptyListCardGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  text: {
    marginBottom: Metrics.spacing.l,
    color: Colors.TEXT_LIGHT,
    marginTop: Metrics.spacing.s,
  },
  gradientContainer: {
    borderRadius: Metrics.radius.circle,
  },
  addLocationButton: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: Metrics.spacing.m,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: Metrics.spacing.s,
  },
});

export default styles;
