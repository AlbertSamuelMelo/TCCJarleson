import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/views/Calculator';
import CalcularConcreto from './src/views/CalcularConcreto'
import CalcularPisos from "./src/views/CalcularPisos"
import CalculoPintura from "./src/views/CalculoPintura"
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalculoPintura/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7FAA9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
