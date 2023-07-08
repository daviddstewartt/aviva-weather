import {Platform} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {setLocationsPermissionsGranted} from '../redux/features/location';
import {useDispatch} from 'react-redux';
import {getUsersCurrentLocation} from '../util/location';

type LocationPermissionsWrapperProps = {};

const LocationPermissionsWrapper: React.FC<
  LocationPermissionsWrapperProps & PropsWithChildren
> = ({children}) => {
  const dispatch = useDispatch();

  const requestLocationPermission = async () => {
    try {
      const PERMISSION = Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      });

      const granted = await request(PERMISSION);

      if (granted === 'granted') {
        await getUsersCurrentLocation();
        dispatch(setLocationsPermissionsGranted(true));
      } else {
        throw new Error('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
      dispatch(setLocationsPermissionsGranted(false));
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return children;
};

export default LocationPermissionsWrapper;
