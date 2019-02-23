import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SlideshowScreen from '../screens/SlideshowScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (<
    TabBarIcon focused={focused}
    name={
      Platform.OS === 'ios' ?
        `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
    }
  />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Enlaces',
  tabBarIcon: ({ focused }) => (<
    TabBarIcon focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
  />
  ),
};

const SlideshowStack = createStackNavigator({
  Slideshow: SlideshowScreen,
});

SlideshowStack.navigationOptions = {
  tabBarLabel: 'Slides',
  tabBarIcon: ({ focused }) => (<
    TabBarIcon focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-happy'}
  />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SlideshowStack
});