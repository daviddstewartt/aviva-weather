import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {setAppStateStatus} from './src/redux/features/app';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from './src/Screens/HomeScreen';
import ForecastScreen from './src/Screens/ForecastScreen';

// Components
import NavigationOverlay from './src/Components/NavigationOverlay';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LocationPermissionsWrapper from './src/Components/LocationPermissionsWrapper';

const Stack = createStackNavigator();

const App = () => {
  const [currentRouteName, setCurrentRouteName] = useState();
  const defaultScreenOptions = {
    headerShown: false,
  };

  useEffect(() => {
    const AppStateListener = AppState.addEventListener('change', state => {
      store.dispatch(setAppStateStatus(state));
    });

    return () => {
      AppStateListener.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      <LocationPermissionsWrapper>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer
            onStateChange={state =>
              setCurrentRouteName(state?.index === 0 ? 'Home' : 'Forecast')
            }>
            <Stack.Navigator screenOptions={defaultScreenOptions}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Forecast" component={ForecastScreen} />
            </Stack.Navigator>
            <NavigationOverlay currentRoute={currentRouteName || 'Home'} />
          </NavigationContainer>
        </GestureHandlerRootView>
      </LocationPermissionsWrapper>
    </Provider>
  );
};

export default App;
