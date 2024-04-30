import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import useTrackContext from './src/hooks/context/useTrackContext';

export default function App() {
  // const {state, getTrackProgress} = useTrackContext();

  // useEffect(() => {
  //   getTrackProgress();
  // }, [state.currentTrackTime]);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
