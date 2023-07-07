import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, Metrics} from '../theme';

type SearchLocationsInputProps = {
  onSearchResultsVisibility: (visible: boolean) => void;
};

const SearchLocationsInput: React.FC<SearchLocationsInputProps> = ({
  onSearchResultsVisibility,
}) => {
  const [searchLocationString, setSearchLocationString] = useState<string>('');

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
