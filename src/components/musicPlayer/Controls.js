import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Play from '../../../assets/icons/musicPlayer/play.svg';
import PreviousTrack from '../../../assets/icons/musicPlayer/previousTrack.svg';
import NextTrack from '../../../assets/icons/musicPlayer/nextTrack.svg';
import ProgressBar from 'react-native-progress/Bar';
import Pause from '../../../assets/icons/musicPlayer/pause.svg';

export default function Controls() {
  const {width} = Dimensions.get('window');
  const [trackPlaying, setTrackPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <ProgressBar width={width - 30} progress={0.3} color={'white'} />
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <PreviousTrack width={60} height={60} fill={'white'} />
        </TouchableOpacity>
        {trackPlaying ? (
          <TouchableOpacity onPress={() => setTrackPlaying(false)}>
            <Play
              width={80}
              height={80}
              fill={'white'}
              style={styles.playIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setTrackPlaying(true)}>
            <Pause
              width={80}
              height={80}
              fill={'white'}
              style={styles.playIcon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <NextTrack width={60} height={60} fill={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  playIcon: {
    marginHorizontal: 25,
  },
});
