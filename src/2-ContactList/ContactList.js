import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details'

const Stack = createNativeStackNavigator();

function ContactList(){
  return (
    <Stack.Navigator initialRoute={Home}>

      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{ title: 'My Contacts'}}
      />

      <Stack.Screen 
      name="Details" 
      component={Details}
      options={{ title: 'Contact Details' }}
      />

    </Stack.Navigator>
  )
}


export default () => {
  return (
    <NavigationContainer>
      <ContactList />
    </NavigationContainer>
  )
}