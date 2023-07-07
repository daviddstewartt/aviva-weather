import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Metrics} from '../theme';

type SearchLocationsInputProps = {
  onSearchResultsVisibility: (visible: boolean) => void;
};

const SearchLocationsInput: React.FC<SearchLocationsInputProps> = ({
  onSearchResultsVisibility,
}) => {
  const [searchLocationString, setSearchLocationString] = useState<string>('');
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);

  // Debounce the search string
  useEffect(() => {
    if (searchLocationString.length < 3) {
      return;
    }
    setIsSearchLoading(true);
    const searchTimeoutId = setTimeout(() => {
      // Call the API
    }, 2000);

    return () => {
      clearTimeout(searchTimeoutId);
    };
  }, [searchLocationString]);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for a city"
          value={searchLocationString}
          style={styles.input}
          onBlur={() => {
            onSearchResultsVisibility(false);
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
              onSearchResultsVisibility(false);
            }}>
            <Text>Clear</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SearchLocationsInput;

const styles = StyleSheet.create({
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
});
