import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNavBar from "./src/components/BottomNavBar";
import AppBar from "./src/components/AppBar";

export default function App() {
  return (
    <PaperProvider>
      <AppBar />
      <BottomNavBar/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
