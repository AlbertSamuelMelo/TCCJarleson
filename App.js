import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/views/Calculator';
import CalcularConcreto from './src/views/CalcularConcreto'
import CalcularPisos from "./src/views/CalcularPisos"
import CalculoPintura from "./src/views/CalculoPintura"
import List from "./src/views/List"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <List data={["Parede", "Piso", "Concreto", "Reboco"]}/>
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
