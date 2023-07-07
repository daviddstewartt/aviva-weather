import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from './src/Screens/HomeScreen';
import ForecastScreen from './src/Screens/ForecastScreen';

// Components
import ForecastToggleOverlay from './src/Components/ForecastToggleOverlay';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  const [currentRouteName, setCurrentRouteName] = useState();
  const defaultScreenOptions = {
    headerShown: false,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        onStateChange={state =>
          setCurrentRouteName(state?.index === 0 ? 'Home' : 'Forecast')
        }>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Forecast" component={ForecastScreen} />
        </Stack.Navigator>
        <ForecastToggleOverlay currentRoute={currentRouteName || 'Home'} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
