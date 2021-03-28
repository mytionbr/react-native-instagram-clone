import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/Landing'
import Register from './components/auth/Register'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;