import React from 'react';
import { Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SlideshowScreen from '../screens/SlideshowScreen';
import ContactScreen from '../screens/ContactScreen'
import { createAppNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Links: { screen: LinksScreen },
  Slideshows: { screen: SlideshowScreen },
  Contact: { screen: ContactScreen }
});

export default createAppContainer(MainNavigator);