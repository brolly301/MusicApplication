import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
  State,
} from 'react-native-track-player';
import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setup_track_player':
      return {...state, isSetup: true};

    case 'play_track':
      return {...state, isPlaying: true};

    case 'pause_track':
      return {...state, isPlaying: false};
  }
};

const setupTrackPlayer = dispatch => async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });
    dispatch({type: 'setup_track_player'});
  } catch (e) {
    console.log(e);
  }
};

const addTracks = dispatch => async () => {
  await TrackPlayer.add([
    {
      id: '1',
      url: require('../../assets/audio/SanFrancisco.mp3'),
      title: 'San Francisco',
      artist: 'Mac Miller',
      duration: 217,
    },
    {
      id: '2',
      url: require('../../assets/audio/BirdCall.mp3'),
      title: 'Bird Call',
      artist: 'Mac Miller',
      duration: 180,
    },
    {
      id: '3',
      url: require('../../assets/audio/BreakTheLaw.mp3'),
      title: 'Break The Law',
      artist: 'Mac Miller',
      duration: 201,
    },
    {
      id: '4',
      url: require('../../assets/audio/BrandName.mp3'),
      title: 'Brand Name',
      artist: 'Mac Miller',
      duration: 267,
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

const playTrack = dispatch => async () => {
  try {
    TrackPlayer.play();
    dispatch({type: 'play_track'});
  } catch (e) {
    console.log(e);
  }
};

const pauseTrack = dispatch => async () => {
  try {
    TrackPlayer.pause();
    dispatch({type: 'pause_track'});
  } catch (e) {
    console.log(e);
  }
};

const previousTrack = dispatch => () => {
  try {
    TrackPlayer.skipToPrevious();
  } catch (e) {
    console.log(e);
  }
};

const nextTrack = dispatch => () => {
  try {
    TrackPlayer.skipToNext();
  } catch (e) {
    console.log(e);
  }
};

export const {Provider, Context} = createDataContext(
  reducer,
  {
    setupTrackPlayer,
    addTracks,
    playTrack,
    pauseTrack,
    previousTrack,
    nextTrack,
  },
  {isSetup: false, isPlaying: false},
);
