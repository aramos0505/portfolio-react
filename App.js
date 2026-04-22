import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import About from './screens/About'
import ProjectScreen from './screens/ProjectScreen'
import ContactScreen from './screens/ContactScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fdfbf6'
          },
          headerTitleStyle: {
            color: '#5c4033'
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} />
        <Stack.Screen 
          name="About" 
          component={About} />
        <Stack.Screen 
          name="Projects" 
          component={ProjectScreen} />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}