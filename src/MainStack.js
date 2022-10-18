import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './views/Login.component';
import { SignUp } from './views/Signup.component';
import { Menu } from './views/Menu.view';
import { SpecialDishes } from './views/SpecialDishes.component';
import { Extras } from './views/Extras.component';
import { Shopping } from './views/Shopping.view';
import { Lunch } from './views/Lunch.component';
import { Invoice } from './views/Invoice.view';

const Drawer = createDrawerNavigator();

export default function MainStack() {


  return (<NavigationContainer>
    <Drawer.Navigator initialRouteName="Iniciar Sesión" >
      <Drawer.Screen name="Iniciar Sesión" component={Login} />
      <Drawer.Screen name="Registrarse" component={SignUp} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Platos Especiales" component={SpecialDishes}/>
      <Drawer.Screen name="Extras" component={Extras}/>
      <Drawer.Screen name="Carrito" component={Shopping}/>
      <Drawer.Screen name="Almuerzo"  component={Lunch}/>
      <Drawer.Screen name="Factura"  component={Invoice}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}