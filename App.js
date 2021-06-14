import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Fb from './screens/fb';
import In from './screens/inn';

export default function App() {
  return (
    <View>
    <AppContainer/>
    <Text>BUZZ APP</Text>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  Fb:{screen:fb},
  In:{screen:inn}
})

const AppContainer=createAppContainer(TabNavigator);
