import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Controls from '../components/musicPlayer/Controls';
import TrackDetails from '../components/musicPlayer/TrackDetails';
import BackButton from '../../assets/icons/backButton.svg';
import useTrackContext from '../hooks/context/useTrackContext';
import TrackPlayer, {Event} from 'react-native-track-player';
import AlbumCover from '../../assets/images/albumCover.png';
import {getColors} from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';

export default function MusicPlayerScreen() {
  const {state, setupTrackPlayer, addTracks} = useTrackContext();
  const [activeTrack, setActiveTrack] = useState(null);

  const [colors, setColors] = useState(null);

  useEffect(() => {
    // getColors(AlbumCover, {
    //   fallback: '#228B22',
    //   cache: true,
    //   key: AlbumCover,
    // }).then(setColors);

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

  return (
    // <LinearGradient
    //   colors={[
    //     colors?.dominant?.toString() + 'CC',
    //     colors?.average?.toString() + 'CC',
    //   ]}>
    <View style={[styles.container]}>
      <BackButton width={30} height={30} style={styles.backButton} />
      <TrackDetails activeTrack={activeTrack} />
      <Controls activeTrack={activeTrack} />
    </View>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
    backgroundColor: '#5B5A5A',
  },
  backButton: {
    marginLeft: 5,
  },
});
