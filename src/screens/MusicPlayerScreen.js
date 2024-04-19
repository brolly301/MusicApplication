import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Controls from '../components/musicPlayer/Controls';
import TrackDetails from '../components/musicPlayer/TrackDetails';

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      <TrackDetails />
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'gray',
  },
});
