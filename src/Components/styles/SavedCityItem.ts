import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  gradientContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  saveCityContainer: {
    backgroundColor: '#ffffff30',
    borderRadius: Metrics.radius.rounded,
    marginBottom: Metrics.spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    width: width - Metrics.spacing.l,
    marginHorizontal: Metrics.spacing.m,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cityTitle: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
    fontWeight: 'bold',
  },
  cityDescription: {
    fontSize: 16,
    color: Colors.LIGHT_GREY,
  },
  cityLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.m,
    paddingVertical: Metrics.spacing.m,
  },
  cityTempContainer: {
    alignItems: 'center',
    paddingRight: Metrics.spacing.m,
    paddingVertical: Metrics.spacing.m,
  },
  horizontalCityTemp: {
    fontSize: Fonts.size.l,
    fontWeight: 'bold',
    color: Colors.TEXT_LIGHT,
  },
  HorizontalHiLoText: {
    fontSize: Fonts.size.s,
    marginRight: Metrics.spacing.s,
    color: Colors.PURPLE_SECONDARY,
  },

  // Saved City Card Styles
  cardGradientContainer: {
    flex: 1,
    paddingHorizontal: Metrics.spacing.l,
    paddingVertical: Metrics.spacing.l,
    alignItems: 'center',
  },
  cityMainInfo: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardContainer: {
    height: '100%',
    width: width - Metrics.spacing.l,
    borderRadius: Metrics.radius.rounded,
    overflow: 'hidden',
    backgroundColor: Colors.SPACE_GREY_PRIMARY,
    marginHorizontal: Metrics.spacing.m,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cityTemp: {
    fontSize: 70,
    fontWeight: 'bold',
    color: Colors.TEXT_LIGHT,
  },

  cardCityDescription: {
    fontSize: Fonts.size.l,
    // color: Colors.TEXT_LIGHT,
    color: Colors.LIGHT_GREY,
  },
  hiLowText: {
    fontSize: Fonts.size.m,
    // color: Colors.LIGHT_GREY,
    color: Colors.PURPLE_SECONDARY,
    fontWeight: 'bold',
  },
  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: Metrics.spacing.l,
  },
  quickInfoCard: {
    width: '49%',
    borderRadius: Metrics.radius.rounded,
    marginVertical: Metrics.spacing.s,
    padding: Metrics.spacing.m,
  },
});

export default styles;
