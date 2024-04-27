import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LibraryScreen from '../../screens/LibraryScreen';
import MusicPlayerScreen from '../../screens/MusicPlayerScreen';

const Stack = createStackNavigator();

export default function LibraryStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="library_screen" component={LibraryScreen} />
      <Stack.Screen name="music_player_screen" component={MusicPlayerScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
