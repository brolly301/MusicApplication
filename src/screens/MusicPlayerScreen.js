import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Controls from '../components/musicPlayer/Controls';
import TrackDetails from '../components/musicPlayer/TrackDetails';
import BackButton from '../../assets/icons/backButton.svg';

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      <BackButton width={30} height={30} style={styles.backButton} />
      <TrackDetails />
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
    padding: 20,
  },
  backButton: {
    marginLeft: 5,
  },
});
