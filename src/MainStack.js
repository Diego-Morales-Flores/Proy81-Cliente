import { HomeScreen } from './views/Home.component';
import { DetailsScreen } from './views/Details.component';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './views/Login.component';

const Drawer = createDrawerNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Iniciar Sesión" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={DetailsScreen} />
        <Drawer.Screen  name="Iniciar Sesión" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}