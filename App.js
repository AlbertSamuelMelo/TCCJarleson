import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/views/Calculator';
import CalcularConcreto from './src/views/CalcularConcreto'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalcularConcreto/>
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
