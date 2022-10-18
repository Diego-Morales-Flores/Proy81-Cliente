import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import MainStack from './src/MainStack';
// Define the config

import { useState } from "react";
import TrolleyContext from "./src/context/TrolleyContext";
import User from "./src/context/UserContext";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      amber: {
        400: '#d97706',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });
  const [user, setUser] = useState({
    sesion: false,
    token: '',
    name: '',
    lastname: '',
    email:''
  });
  const [trolley, setTrolley] = useState({
    lunches: [],
    extras: [],
    dishes: [],
    total: 0
  });
  return (
    <NativeBaseProvider theme={theme}>
      <User.Provider value={{ user, setUser }}>
        <TrolleyContext.Provider value={{ trolley, setTrolley }}>
          <MainStack />
        </TrolleyContext.Provider>
      </User.Provider>
    </NativeBaseProvider>
  );
}
