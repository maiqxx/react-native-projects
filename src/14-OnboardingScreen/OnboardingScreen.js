import { Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';

import OnboardingPages from './screens/OnboardingPages';
import Login from './screens/Login';

const Stack = createStackNavigator();

const OnboardingScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding" 
        component={OnboardingPages}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login" 
        component={Login}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )

}

export default () => {
  return (
    <NavigationContainer>
      <OnboardingScreen />
    </NavigationContainer>
  )
}
