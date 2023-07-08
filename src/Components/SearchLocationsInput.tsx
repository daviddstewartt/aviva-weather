import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Config} from '../../config';
import {searchLocationCities} from '../util/location';
import {requestSelectedCityWeather} from '../redux/features/location';
import {Colors, Metrics} from '../theme';
import {ICity} from '../ts/interfaces';

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
    onSearchResultsVisibility(false);
    setShowCitiesList(false);
    setSearchLocationString('');
    // unfocus the input
    if (inputRef.current) {
      inputRef.current.blur();
    }

    dispatch(requestSelectedCityWeather(city)); // get the current city weathe & store it in state
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          placeholder="Search for a city"
          value={searchLocationString}
          style={styles.input}
          onBlur={() => {
            onSearchResultsVisibility(false);
            setShowCitiesList(false);
          }}
          onFocus={() => onSearchResultsVisibility(true)}
          onChangeText={setSearchLocationString}
        />
        {isSearchLoading ? (
          <ActivityIndicator color={Colors.AVIVA_BLUE} />
        ) : searchLocationString.length >= 1 ? (
          <TouchableOpacity
            onPress={() => {
              setSearchLocationString('');
              setShowCitiesList(false);
              onSearchResultsVisibility(false);
            }}>
            <Text>Clear</Text>
          </TouchableOpacity>
        ) : null}
      </View>

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
        <View style={{alignItems: 'center', marginTop: Metrics.spacing.s}}>
          <Text style={styles.searchResultItemText}>{searchError}</Text>
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
    backgroundColor: Colors.AVIVA_YELLOW,
    width: '90%',
    height: 50,
    borderRadius: Metrics.radius.circle,
    paddingHorizontal: 20,
    marginTop: Metrics.spacing.l,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  searchResultsContainer: {
    width: '90%',
    marginTop: Metrics.spacing.l,
    flexDirection: 'column',
  },
  searchResultItem: {
    width: '100%',
    paddingVertical: Metrics.spacing.l,
    borderBottomColor: Colors.AVIVA_YELLOW,
    borderBottomWidth: 1,
  },
  searchResultItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
