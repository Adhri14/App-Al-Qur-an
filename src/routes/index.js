import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  About,
  DetailSurah, Home, PageName, Play, Search, Setting, SplashScreen, UpdateName,
} from '../pages';
import { BottomTab } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator initialRouteName="Home" tabBar={(props) => <BottomTab {...props} />}>
    <Tab.Screen name="Play" component={Play} options={{ tabBarVisible: false }} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
);

const Route = () => (
  <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="PageName" component={PageName} options={{ headerShown: false }} />
    <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    <Stack.Screen name="DetailSurah" component={DetailSurah} options={{ headerShown: false }} />
    <Stack.Screen name="UpdateName" component={UpdateName} options={{ headerShown: false }} />
    <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default Route;
