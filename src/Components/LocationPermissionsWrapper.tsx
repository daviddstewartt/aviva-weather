import {Platform} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {RootState, store} from '../redux/store';
import {PERMISSIONS, request} from 'react-native-permissions';
import {setLocationsPermissionsGranted} from '../redux/features/location';
import {getUsersCurrentLocation} from '../util/location';
import {useDispatch, useSelector} from 'react-redux';
import {setRequestingLocation} from '../redux/features/app';

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
      store.dispatch(setRequestingLocation(false));
    } else {
      throw new Error('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
    store.dispatch(setLocationsPermissionsGranted(false));
    store.dispatch(setRequestingLocation(false));
  }
};

const LocationPermissionsWrapper: React.FC<
  LocationPermissionsWrapperProps & PropsWithChildren
> = ({children}) => {
  const dispatch = useDispatch();
  const {appState, requestingLocation} = useSelector(
    (state: RootState) => state.app,
  );

  useEffect(() => {
    if (appState === 'active' && !requestingLocation) {
      dispatch(setRequestingLocation(true));
      requestLocationPermission();
    }
  }, [appState]);

  return children;
};

export default LocationPermissionsWrapper;
