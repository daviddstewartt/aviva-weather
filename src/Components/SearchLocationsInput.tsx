import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';
import {Config} from '../../config';

// Redux
import {useDispatch} from 'react-redux';
import {searchLocationCities} from '../util/location';
import {requestSelectedCityWeather} from '../redux/features/location';

// Types
import {ICity} from '../ts/interfaces';

// Styles & Icons
import {Colors, Metrics} from '../theme';
import Entype from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Components
import LinearGradient from 'react-native-linear-gradient';

type SearchLocationsInputProps = {
  onSearchResultsVisibility: (visible: boolean) => void;
};

const SearchLocationsInput: React.FC<SearchLocationsInputProps> = ({
  onSearchResultsVisibility,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<TextInput>(null);
  const [citiesList, setCitiesList] = useState<ICity[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);
  const [showCitiesList, setShowCitiesList] = useState<boolean>(false);
  const [searchLocationString, setSearchLocationString] = useState<string>('');
  const [searchError, setSearchError] = useState<string | null>(null);

  // Debounce the search string
  useEffect(() => {
    if (searchLocationString.length < 3) {
      return;
    }
    setIsSearchLoading(true);
    const searchTimeoutId = setTimeout(() => {
      getCitiesListByString(searchLocationString);
    }, 2000);

    return () => {
      clearTimeout(searchTimeoutId);
    };
  }, [searchLocationString]);

  /**
   * Gets the list of cities from the OpenWeatherMap API
   * @param {string} location - The location to search for
   */
  const getCitiesListByString = async (location: string) => {
    try {
      const cities = await searchLocationCities(
        location,
        Config.OPEN_WEATHER_MAP_API_KEY,
      );

      // give each city an id
      cities.forEach(city => {
        city.id = city.name + city.country + city.lat + city.lon;
      });

      setCitiesList(cities);
      setShowCitiesList(true);
      setIsSearchLoading(false);
      setSearchError(null);
      onSearchResultsVisibility(true);
    } catch (error) {
      console.log('Error:', error.message);
      setSearchError(error.message);
      setShowCitiesList(false);
      setIsSearchLoading(false);
      onSearchResultsVisibility(true);
    }
  };

  /**
   * Selects a city from the list of cities
   * @param {ICity} city - The city to select
   */
  const onSelectCity = (city: ICity): void => {
    resetSearchState();
    // unfocus the input
    if (inputRef.current) {
      inputRef.current.blur();
    }

    dispatch(requestSelectedCityWeather(city)); // get the current city weathe & store it in state
  };

  const resetSearchState = () => {
    setSearchLocationString('');
    setShowCitiesList(false);
    onSearchResultsVisibility(false);
    setSearchError(null);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <View style={styles.searchContainer}>
      <LinearGradient
        colors={[Colors.SPACE_GREY_PRIMARY, Colors.SPACE_GREY_SECONDARY]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderRadius: Metrics.radius.circle,
          marginTop: Metrics.spacing.l,
        }}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
            placeholder="Search for a city"
            placeholderTextColor={Colors.LIGHT_GREY}
            value={searchLocationString}
            style={styles.input}
            onBlur={() => resetSearchState()}
            onFocus={() => onSearchResultsVisibility(true)}
            onChangeText={setSearchLocationString}
          />

          {isSearchLoading ? (
            <ActivityIndicator color={Colors.PURPLE_PRIMARY} />
          ) : inputRef.current?.isFocused() ? (
            <TouchableOpacity
              style={{alignSelf: 'center', marginRight: Metrics.spacing.xs}}
              onPress={() => resetSearchState()}>
              <Entype name="cross" size={30} color="#fff" />
            </TouchableOpacity>
          ) : null}
        </View>
      </LinearGradient>

      {!searchError && showCitiesList && (
        <View style={styles.searchResultsContainer}>
          {citiesList.length >= 1 &&
            citiesList.map((city: ICity, index: number) => (
              <TouchableOpacity
                key={`${city.lat}-${city.lon}`}
                onPress={() => onSelectCity(city)}
                style={[
                  styles.searchResultItem,
                  index === citiesList.length - 1 && {borderBottomWidth: 0},
                ]}>
                <Text style={styles.searchResultItemText}>
                  {city.name}, {city.state || city.country}
                </Text>
              </TouchableOpacity>
            ))}

          {citiesList.length === 0 && (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.searchResultItemText}>
                No results found for {searchLocationString}
              </Text>

              <Text style={{textAlign: 'center', color: '#fff'}}>
                Please try again with a different search string
              </Text>
            </View>
          )}
        </View>
      )}

      {searchError && (
        <View style={{alignItems: 'center', marginTop: Metrics.spacing.l}}>
          <MaterialIcons
            name="error"
            size={60}
            color={Colors.PURPLE_SECONDARY}
          />
          <Text style={styles.searchResultItemText}>
            Oh no, something went wrong
          </Text>
          <Text style={styles.errorText}>{searchError}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchLocationsInput;

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    height: 50,
    paddingHorizontal: 20,

    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.TEXT_LIGHT,
  },
  searchResultsContainer: {
    width: '90%',
    marginTop: Metrics.spacing.l,
    flexDirection: 'column',
  },
  searchResultItem: {
    width: '100%',
    paddingVertical: Metrics.spacing.l,
    borderBottomColor: Colors.PURPLE_SECONDARY,
    borderBottomWidth: 1,
  },
  searchResultItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    color: Colors.LIGHT_GREY,
    marginTop: Metrics.spacing.m,
    fontSize: 16,
  },
});
