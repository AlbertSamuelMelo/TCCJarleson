import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/views/Calculator';
import TextPlaceHolder from "./src/views/Calculator"
export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
      <StatusBar style="auto" />
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
