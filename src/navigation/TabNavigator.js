import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import HomeIcon from '../../assets/icons/home.svg'; // Adjust import statements accordingly
import LibraryIcon from '../../assets/icons/library.svg';
import SearchIcon from '../../assets/icons/search.svg';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="home_tab">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIcon width={35} height={35} f />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <LibraryIcon width={33} height={33} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <SearchIcon width={35} height={35} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
