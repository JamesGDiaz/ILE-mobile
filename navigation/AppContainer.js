import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ContactScreen from '../screens/ContactScreen';
import DerechosScreen from '../screens/DerechosScreen';
import NormatividadScreen from '../screens/NormatividadScreen';
import FacilidadesScreen from '../screens/FacilidadesScreen';
import RedesScreen from '../screens/RedesDeApoyoScreen';
import FactibilidadScreen from '../screens/FactibilidadScreen';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 600,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [{ translateX }] }
    },
  }
}

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Links: { screen: LinksScreen },
  Contact: { screen: ContactScreen },
  Derechos: { screen: DerechosScreen },
  Normatividad: { screen: NormatividadScreen },
  Redes: { screen: RedesScreen },
  Facilidades: { screen: FacilidadesScreen },
  Factibilidad: { screen: FactibilidadScreen }
}, {
    transitionConfig,
  });

export default createAppContainer(MainNavigator);