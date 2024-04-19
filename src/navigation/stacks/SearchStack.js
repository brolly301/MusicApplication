import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../screens/SearchScreen';
import MusicPlayerScreen from '../../screens/MusicPlayerScreen';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="search_screen" component={SearchScreen} />
      <Stack.Screen name="music_player_screen" component={MusicPlayerScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
