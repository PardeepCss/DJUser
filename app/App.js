/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginS from './Screens/auths/Login';
import SignupS from './Screens/auths/Signup';
import ForgotPasswordS from './Screens/auths/ForgotPassword';
import TabsS from './Screens/Home/Tabs';
import { createStackNavigator, createAppContainer } from "react-navigation";


class App extends Component {
  
 

  render() {
    

    return (
      <View>
        <Text>Welcome to my awesome app {this.state.user.email}!</Text>
      </View>
    );
  }

}

const AppNavigator = createStackNavigator({
  Login: LoginS,
  SignUp: SignupS,
  ForgotPassword: ForgotPasswordS,
  Tab: TabsS
});

export default createAppContainer(AppNavigator);