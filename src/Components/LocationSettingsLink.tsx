import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Styles & Icons
import {Colors, Metrics} from '../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';

const LocationSettingsLink = () => {
  const openLocationSettings = () => {
    // Open location settings
    Linking.openSettings();
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="location-off"
        size={60}
        color={Colors.PURPLE_SECONDARY}
      />
      <Text style={styles.errorHeading}>Failed to get current location</Text>
      <Text style={styles.errorText}>
        Make sure you have an internet connection and location permission turned
        on
      </Text>

      <Button
        onPress={() => openLocationSettings()}
        gradientColors={[Colors.PURPLE_SECONDARY, Colors.PURPLE_PRIMARY]}
        title="Open Location Settings"
        titleStyle={{color: Colors.LIGHT}}
        style={{marginTop: Metrics.spacing.m}}
      />
    </View>
  );
};

export default LocationSettingsLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Metrics.spacing.m,
    color: Colors.TEXT_LIGHT,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.LIGHT_GREY,
  },
});
