import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from './src/Screens/HomeScreen';
import ForecastScreen from './src/Screens/ForecastScreen';

// Components
import NavigationOverlay from './src/Components/NavigationOverlay';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  const [currentRouteName, setCurrentRouteName] = useState();
  const defaultScreenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
