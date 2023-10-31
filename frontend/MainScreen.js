// MainScreen.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/HomeScreen';
import Songlist from './tabs/Songlist';
import PlaylistScreen from './tabs/PlaylistScreen';
import MeScreen from './tabs/MeScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }} // Hide the header for all screens in this navigator
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Songlist" component={Songlist} />
      <Tab.Screen name="Playlist" component={PlaylistScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
