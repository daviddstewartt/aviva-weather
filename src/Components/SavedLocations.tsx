import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type SavedLocationsProps = {
  onClose: () => void;
};

const SavedLocations: React.FC<SavedLocationsProps> = ({onClose}) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedLocations;

const styles = StyleSheet.create({});
