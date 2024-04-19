import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import MusicPlayerScreen from '../../screens/MusicPlayerScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="music_player_screen" component={MusicPlayerScreen} />
      <Stack.Screen name="home_screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
