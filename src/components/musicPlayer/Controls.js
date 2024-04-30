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
import Pause from '../../../assets/icons/musicPlayer/pause.svg';
import VolumeOff from '../../../assets/icons/musicPlayer/volumeOff.svg';
import VolumeMax from '../../../assets/icons/musicPlayer/volumeMax.svg';
import useTrackContext from '../../hooks/context/useTrackContext';
import Slider from '@react-native-community/slider';

export default function Controls({activeTrack}) {
  const {
    state,
    playTrack,
    pauseTrack,
    nextTrack,
    previousTrack,
    increaseVolume,
    decreaseVolume,
    setSpecificVolume,
    setTrackDuration,
    getTrackProgress,
  } = useTrackContext();
  const {width} = Dimensions.get('window');
  const [trackPlaying, setTrackPlaying] = useState(state.isPlaying);
  const [volume, setVolume] = useState(state.volume);

  useEffect(() => {
    setTrackPlaying(state.isPlaying);
    setVolume(state.volume);
    getTrackProgress();
  }, [state.isPlaying, state.volume, state.currentTrackTime]);

  const currentTrackTime = trackTime => {
    const seconds = Math.floor(trackTime % 60);
    const minutes = Math.floor(trackTime / 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const fullTime = `${formattedMinutes}:${formattedSeconds}`;
    return fullTime;
  };

  return (
    <View style={styles.container}>
      <View style={styles.trackLengthContainer}>
        <Slider
          style={{width: width - 30, height: 20}}
          value={state.currentTrackTime}
          maximumValue={activeTrack?.duration}
          minimumValue={0}
          color={'white'}
          onValueChange={value => {
            setTrackDuration(value);
          }}
        />
        <View style={styles.trackDurationContainer}>
          <Text>{currentTrackTime(state.currentTrackTime)}</Text>
          <Text>{currentTrackTime(activeTrack?.duration)}</Text>
        </View>
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
        <TouchableOpacity onPress={() => decreaseVolume()}>
          <VolumeOff
            width={20}
            height={20}
            fill={'white'}
            style={styles.volumeOff}
          />
        </TouchableOpacity>
        <View>
          <Slider
            style={{width: width - 130, height: 20}}
            value={volume}
            maximumValue={1}
            minimumValue={0.0}
            color={'white'}
            onValueChange={value => {
              setSpecificVolume(value);
            }}
          />
        </View>
        <TouchableOpacity onPress={() => increaseVolume()}>
          <VolumeMax
            width={20}
            height={20}
            fill={'white'}
            style={styles.volumeMax}
          />
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
  trackDurationContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});
