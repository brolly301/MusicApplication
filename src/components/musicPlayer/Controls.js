import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Play from '../../../assets/icons/musicPlayer/play.svg';
import PreviousTrack from '../../../assets/icons/musicPlayer/previousTrack.svg';
import NextTrack from '../../../assets/icons/musicPlayer/nextTrack.svg';
import ProgressBar from 'react-native-progress/Bar';
import Pause from '../../../assets/icons/musicPlayer/pause.svg';
import VolumeOff from '../../../assets/icons/musicPlayer/volumeOff.svg';
import VolumeMax from '../../../assets/icons/musicPlayer/volumeMax.svg';
import useTrackContext from '../../hooks/context/useTrackContext';

export default function Controls() {
  const {state, playTrack, pauseTrack, nextTrack, previousTrack} =
    useTrackContext();
  const {width} = Dimensions.get('window');
  const [trackPlaying, setTrackPlaying] = useState(state.isPlaying);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    setTrackPlaying(state.isPlaying);
  }, [state.isPlaying]);

  return (
    <View style={styles.container}>
      <View style={styles.trackLengthContainer}>
        <ProgressBar width={width - 75} progress={0.3} color={'white'} />
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={() => previousTrack()}>
          <PreviousTrack width={60} height={60} fill={'white'} />
        </TouchableOpacity>
        {!trackPlaying ? (
          <TouchableOpacity onPress={() => playTrack()}>
            <Play
              width={80}
              height={80}
              fill={'white'}
              style={styles.playIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => pauseTrack()}>
            <Pause
              width={80}
              height={80}
              fill={'white'}
              style={styles.playIcon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => nextTrack()}>
          <NextTrack width={60} height={60} fill={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.volumeContainer}>
        <VolumeOff
          width={20}
          height={20}
          fill={'white'}
          style={styles.volumeOff}
        />
        <View>
          <ProgressBar width={width - 125} progress={0.3} color={'white'} />
        </View>
        <VolumeMax
          width={20}
          height={20}
          fill={'white'}
          style={styles.volumeMax}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
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
  volumeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  volumeOff: {
    marginRight: 5,
  },
  volumeMax: {
    marginLeft: 10,
  },
});
