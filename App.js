import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Calculator from './src/views/Calculator';
import CalcularConcreto from './src/views/CalcularConcreto'
import CalcularPisos from "./src/views/CalcularPisos"
import CalculoPintura from "./src/views/CalculoPintura"
import List from "./src/views/List"

const Stack = createStackNavigator();

function ListScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <List navigation={navigation} route={route}/>
    </View>
  );
}

function CalculatorScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Calculator navigation={navigation} route={route}/>
    </View>
  );
}

function CreateNavigator(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Quantitativo">
        <Stack.Screen name="Quantitativo" component={ListScreen} />
        <Stack.Screen name="Materiais" component={ListScreen} />
        <Stack.Screen name="Dimenções" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    CreateNavigator()
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
