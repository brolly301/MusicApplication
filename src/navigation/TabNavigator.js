import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="home_tab">
      <Tab.Screen
        name="home_tab"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="library_tab"
        options={{headerShown: false}}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="search_tab"
        options={{headerShown: false}}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
