import {Linking, StyleSheet} from 'react-native';
import React, {Fragment, PropsWithChildren} from 'react';
// Redux
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

// Styles
import {Colors} from '../../theme';

// Components
import Error from '../../Components/Error';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ErrorHandlerUI: React.FC<PropsWithChildren> = ({children}) => {
  const {selectedCity, permissionsGranted, isLoading, error} = useSelector(
    (state: RootState) => state.location,
  );

  const openLocationSettings = () => {
    // Open location settings
    Linking.openSettings();
  };

  return !error ? (
    <Fragment>
      {!selectedCity && permissionsGranted && (
        <Error
          title="No location selected"
          error="We cant show you the weather if you dont select a location"
          onButtonPress={() => {}}
          buttonTitle="Use Current Location"
        />
      )}

      {!selectedCity && !permissionsGranted && (
        <Error
          icon={
            <MaterialIcons
              name="location-off"
              size={60}
              color={Colors.PURPLE_SECONDARY}
            />
          }
          title="Failed to get current location"
          error="Make sure you have an internet connection and location permission turned on"
          buttonTitle="Open Location Settings"
          onButtonPress={openLocationSettings}
        />
      )}

      {selectedCity && permissionsGranted && !isLoading && (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  ) : (
    <Error title="Oh no, Something went wrong" error={error} />
  );
};

export default ErrorHandlerUI;
