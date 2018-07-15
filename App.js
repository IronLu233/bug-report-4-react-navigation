/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

class Home extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };
  render() {
    return <View style={{ backgroundColor: "#E6E6FA" }} flex={1} />;
  }
}
const RootStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
