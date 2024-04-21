import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Controls from '../components/musicPlayer/Controls';
import TrackDetails from '../components/musicPlayer/TrackDetails';
import BackButton from '../../assets/icons/backButton.svg';
import useTrackContext from '../hooks/context/useTrackContext';
import TrackPlayer from 'react-native-track-player';

export default function MusicPlayerScreen() {
  const {state, setupTrackPlayer, addTracks} = useTrackContext();

  useEffect(() => {
    async function setup() {
      await setupTrackPlayer();
      const queue = await TrackPlayer.getQueue();
      if (state.isSetup && queue.length <= 0) {
        addTracks();
      }
    }
    setup();
  }, [state.isSetup]);

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
