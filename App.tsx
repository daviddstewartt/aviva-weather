import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';

// Redux
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {setAppStateStatus} from './src/redux/features/app';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from './src/Screens/HomeScreen';
import ForecastScreen from './src/Screens/ForecastScreen';

// Components
import NavigationOverlay from './src/Components/NavigationOverlay';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LocationPermissionsWrapper from './src/Components/LocationPermissionsWrapper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <PersistGate persistor={persistor}>
        <LocationPermissionsWrapper>
          <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaProvider>
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
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </LocationPermissionsWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
