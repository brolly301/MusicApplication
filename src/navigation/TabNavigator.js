import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/icons/home.svg'; // Adjust import statements accordingly
import LibraryIcon from '../../assets/icons/library.svg';
import SearchIcon from '../../assets/icons/search.svg';
import LibraryStack from './stacks/LibraryStack';
import HomeStack from './stacks/HomeStack';
import SearchStack from './stacks/SearchStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIcon width={35} height={35} f />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <LibraryIcon width={33} height={33} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <SearchIcon width={35} height={35} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
