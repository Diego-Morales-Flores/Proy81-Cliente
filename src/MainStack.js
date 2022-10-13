import { HomeScreen } from './views/Home.component';
import { DetailsScreen } from './views/Details.component';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './views/Login.component';
import { SignUp } from './views/Signup.component';
import { Menu } from './views/Menu.view';
import { SpecialDishes } from './views/SpecialDishes.component';
import { Extras } from './views/Extras.component';
import UserContext from './context/UserContext';
import StoreDishesContext from './context/StoreDishesContext';
import StoreExtrasContext from './context/StoreExtrasContext';
import StoreLunchContext from './context/StoreLunchContext';
import { Shopping } from './views/Shopping.view';
import { Lunch } from './views/Lunch.component';

const Drawer = createDrawerNavigator();

export default function MainStack() {
  const [storedCredentials, setStoredCredentials] = React.useState({
    token: null
  });
  const [storeDishes, setStoreDishes] = React.useState([]);
  const [storeExtras, setStoreExtras] = React.useState([]);
  const [storeLunch, setStoreLunch] = React.useState([]);

  const [dishesState, setDishesState] = React.useState([]);
  const [extrasState, setExtrasState] = React.useState([]);
  const [lunchesState, setLunchesState] = React.useState([]);

  return (
    <StoreDishesContext.Provider value={{ storeDishes, setStoreDishes }}>
      <StoreExtrasContext.Provider value={{ storeExtras, setStoreExtras }}>
        <StoreLunchContext.Provider value={{ storeLunch, setStoreLunch }}>
          <UserContext.Provider value={{ storedCredentials, setStoredCredentials }}>
            <NavigationContainer>
              <Drawer.Navigator initialRouteName="Iniciar Sesión" >
                {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
                {/* <Drawer.Screen name="Notifications" component={DetailsScreen} /> */}
                <Drawer.Screen name="Iniciar Sesión" component={Login} />
                <Drawer.Screen name="Registrarse" component={SignUp} />
                <Drawer.Screen name="Menu" component={Menu} />
                <Drawer.Screen name="Platos Especiales" children={(props)=><SpecialDishes dishesState={dishesState} setDishesState={setDishesState} {...props}/>} />
                <Drawer.Screen name="Extras" children={(props)=><Extras extrasState={extrasState} setExtrasState={setExtrasState} {...props}/>}/>
                <Drawer.Screen name="Carrito" children={(props)=><Shopping dishesState={dishesState} setDishesState={setDishesState} extrasState={extrasState} setExtrasState={setExtrasState} lunchesState={lunchesState} setLunchesState={setLunchesState} {...props}/>}  />
                <Drawer.Screen name="Almuerzo" children={(props)=><Lunch lunchesState={lunchesState} setLunchesState={setLunchesState} {...props}/>}/>
              </Drawer.Navigator>
            </NavigationContainer>
          </UserContext.Provider>
        </StoreLunchContext.Provider>
      </StoreExtrasContext.Provider>
    </StoreDishesContext.Provider>
  );
}