import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from "./Screens/LoginScreen";
import Universities from './Screens/Universities';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={LoginScreen} />
        <Drawer.Screen name='Universities' component={Universities} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}