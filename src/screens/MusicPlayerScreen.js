import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Controls from '../components/musicPlayer/Controls';
import TrackDetails from '../components/musicPlayer/TrackDetails';
import BackButton from '../../assets/icons/backButton.svg';
import useTrackContext from '../hooks/context/useTrackContext';
import TrackPlayer, {Event} from 'react-native-track-player';

export default function MusicPlayerScreen() {
  const {state, setupTrackPlayer, addTracks} = useTrackContext();
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    async function setup() {
      await setupTrackPlayer();
      const queue = await TrackPlayer.getQueue();
      if (state.isSetup && queue.length <= 0) {
        addTracks();
        const track = await TrackPlayer.getActiveTrack();
        if (track) {
          setActiveTrack(track);
        }
      }
    }

    setup();

    const onTrackChange = async () => {
      const trackId = await TrackPlayer.getCurrentTrack();
      const track = await TrackPlayer.getTrack(trackId);
      setActiveTrack(track);
    };

    // Add event listener for track changes
    const trackChangeSubscription = TrackPlayer.addEventListener(
      Event.PlaybackTrackChanged,
      onTrackChange,
    );

    return () => {
      // Clean up the event listener
      trackChangeSubscription.remove();
    };
  }, [state.isSetup]);

  console.log(activeTrack);

  return (
    <View style={styles.container}>
      <BackButton width={30} height={30} style={styles.backButton} />
      <TrackDetails activeTrack={activeTrack} />
      <Controls activeTrack={activeTrack} />
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
