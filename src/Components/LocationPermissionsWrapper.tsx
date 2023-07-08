import {Platform} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {setLocationsPermissionsGranted} from '../redux/features/location';
import {useDispatch} from 'react-redux';

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
        console.log('You can access the location');
        dispatch(setLocationsPermissionsGranted(true));
      } else {
        console.log('Location permission denied');
        dispatch(setLocationsPermissionsGranted(false));
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
