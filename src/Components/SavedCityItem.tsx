import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {mainToColourGradient} from '../data/Weather';
import {ICityWithWeather} from '../ts/interfaces';

// Redux
import {useDispatch} from 'react-redux';
import {removeCityFromSaved} from '../redux/features/location';

// Styles & Icons
import {Colors, Fonts, Metrics} from '../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

// Components
import Button from './Button';
import WeatherIcon from './WeatherIcon';
import LinearGradient from 'react-native-linear-gradient';
import {formatTime} from '../util/datetime';

const {width} = Dimensions.get('window');

type ItemProps = {
  city: ICityWithWeather;
  onSelect: (city: ICityWithWeather) => void;
  gradient: string[];
  light: boolean;
};

type SavedCityItemProps = Omit<ItemProps, 'gradient' | 'light'> & {
  card: boolean;
};

const SavedCityCard: React.FC<ItemProps> = ({
  city,
  onSelect,
  gradient,
  light,
}) => {
  const dispatch = useDispatch();
  const quickInfo = [
    {
      title: 'Feels Like',
      value: city.weather.main.feels_like,
      iconFamily: 'a5',
      icon: 'temperature-high',
      symbol: '°',
    },
    {
      title: 'Humidity',
      value: city.weather.main.humidity,
      iconFamily: 'a5',
      icon: 'wind',
      symbol: '%',
    },
    {
      title: 'Sunset',
      value: formatTime(city.weather.sys.sunset),
      iconFamily: 'feather',
      icon: 'sunset',
    },
    {
      title: 'Sunrise',
      value: formatTime(city.weather.sys.sunrise),
      iconFamily: 'feather',
      icon: 'sunrise',
    },
  ];
  return (
    <TouchableOpacity
      onPress={() => onSelect(city)}
      style={styles.cardContainer}>
      <LinearGradient
        colors={gradient}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.cardGradientContainer}>
        <View style={styles.cityMainInfo}>
          <WeatherIcon icon={city.weather.weather[0].icon} size={50} />
          <Text style={styles.cityTitle}>{city.name}</Text>
          <Text style={styles.cityTemp}>{city.weather.main.temp}°</Text>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.cardCityDescription}>
              {city.weather.weather[0].description}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.hiLowText}>
                H: {city.weather.main.temp_max}°
              </Text>
              <Text style={styles.hiLowText}>
                L: {city.weather.main.temp_min}°
              </Text>
            </View>
          </View>

          <View style={styles.quickInfoContainer}>
            {quickInfo.map((info, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.quickInfoCard,
                    {
                      backgroundColor:
                        (light ? Colors.LIGHT : Colors.DARK) + '20',
                    },
                  ]}>
                  {info.iconFamily === 'a5' ? (
                    <FontAwesome5
                      name={info.icon}
                      size={20}
                      color={Colors.PURPLE_SECONDARY}
                    />
                  ) : (
                    <Feather
                      name={info.icon}
                      size={20}
                      color={Colors.PURPLE_SECONDARY}
                    />
                  )}
                  <Text style={styles.hiLowText}>{info.title}</Text>
                  <Text
                    style={{
                      marginTop: Metrics.spacing.l,
                      fontSize: Fonts.size.l,
                    }}>
                    {info.value}
                    {info.title === 'Humidity'
                      ? '%'
                      : info.title === 'Feels Like'
                      ? '°'
                      : null}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <Button
          title="Remove Location"
          onPress={() => dispatch(removeCityFromSaved(city.id))}
          gradientColors={[
            (light ? '#ffffff' : '#000000') + '40',
            Colors.PURPLE_PRIMARY + '40',
          ]}
          titleStyle={{color: Colors.TEXT}}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const SavedCityItemHorizontal: React.FC<ItemProps> = ({
  city,
  onSelect,
  gradient,
}) => {
  return (
    <TouchableOpacity
      style={styles.saveCityContainer}
      onPress={() => onSelect(city)}>
      <LinearGradient
        colors={gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainer}
      />
      <View style={styles.cityLocationContainer}>
        <WeatherIcon
          icon={city.weather.weather[0].icon}
          width={50}
          height={50}
        />

        <View>
          <Text style={styles.cityTitle}>{city.name}</Text>
          <Text style={styles.cityDescription}>
            {city.weather.weather[0].description}
          </Text>
        </View>
      </View>

      <View style={styles.cityTempContainer}>
        <Text style={styles.horizontalCityTemp}>{city.weather.main.temp}°</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.HorizontalHiLoText}>
            H: {city.weather.main.temp_max}°
          </Text>
          <Text style={styles.HorizontalHiLoText}>
            L: {city.weather.main.temp_min}°
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SavedCityItem: React.FC<SavedCityItemProps> = ({
  card,
  city,
  onSelect,
}) => {
  const {gradient, light} = mainToColourGradient(city.weather.weather[0].main);
  return card ? (
    <SavedCityCard
      city={city}
      onSelect={onSelect}
      gradient={gradient}
      light={light}
    />
  ) : (
    <SavedCityItemHorizontal
      city={city}
      onSelect={onSelect}
      gradient={gradient}
      light={light}
    />
  );
};

export default SavedCityItem;

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
