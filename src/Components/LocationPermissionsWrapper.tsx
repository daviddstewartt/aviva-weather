import {AppState, Platform} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {store} from '../redux/store';
import {PERMISSIONS, request} from 'react-native-permissions';
import {setLocationsPermissionsGranted} from '../redux/features/location';
import {getUsersCurrentLocation} from '../util/location';

type LocationPermissionsWrapperProps = {};

export const requestLocationPermission = async () => {
  try {
    const PERMISSION = Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    });

    const granted = await request(PERMISSION);

    if (granted === 'granted') {
      await getUsersCurrentLocation();
      store.dispatch(setLocationsPermissionsGranted(true));
    } else {
      throw new Error('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
    store.dispatch(setLocationsPermissionsGranted(false));
  }
};

const LocationPermissionsWrapper: React.FC<
  LocationPermissionsWrapperProps & PropsWithChildren
> = ({children}) => {
  useEffect(() => {
    let AppStateListener = AppState.addEventListener('change', state => {
      if (state === 'background') {
        requestLocationPermission();
      }
    });

    return () => {
      AppStateListener.remove();
    };
  }, []);

  return children;
};

export default LocationPermissionsWrapper;
