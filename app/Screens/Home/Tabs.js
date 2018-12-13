import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeS from './Home';
import SettingsS from './Settings';


const TabNavigator = createBottomTabNavigator({
  Home: HomeS,
  Settings: SettingsS,
});
this.navigationOptions = {
    title: 'DJUser',
    gesturesEnabled: false,
  };
export default createAppContainer(TabNavigator);