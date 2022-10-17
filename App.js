import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import MainStack from './src/MainStack';
// Define the config

import TotalContext from './src/context/totalContext';
import { useState } from "react";
import TrolleyContext from "./src/context/TrolleyContext";

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
  const [total, setTotal] = useState(0);

  const [trolley, setTrolley] = useState({
    lunches: [],
    extras: [],
    dishes: [],
    total:0
  });
  return (
    <NativeBaseProvider theme={theme}>
      <TotalContext.Provider value={{ total, setTotal }}>
      <TrolleyContext.Provider value={{ trolley, setTrolley }}>
        <MainStack />
        </TrolleyContext.Provider>
      </TotalContext.Provider>
    </NativeBaseProvider>
  );
}
