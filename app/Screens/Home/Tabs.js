import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeS from './Home';
import SettingsS from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabNavigator = createBottomTabNavigator({
  Home: HomeS,
  Settings: SettingsS 
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        // iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        iconName = `music-video`;
      } else if (routeName === 'Settings') {
        // iconName = `ios${focused ? '-baseball' : '-basket'}`;
        iconName = `menu`;
      }
      console.log(iconName)
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <MaterialIcons type='Ionicons' name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

);
this.navigationOptions = {
    title: 'DJUser',
    gesturesEnabled: false,
  };
export default createAppContainer(TabNavigator);