import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import BottomNavBar from "./src/components/BottomNavBar";
import AppBar from "./src/components/AppBar";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8E5572',
    accent: '#C2B97F',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppBar />
      <BottomNavBar/>
    </PaperProvider>
  );
}
