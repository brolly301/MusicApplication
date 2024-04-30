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
      return {...state, isSetup: true, volume: action.payload.volume};
    case 'play_track':
      return {...state, isPlaying: true};
    case 'pause_track':
      return {...state, isPlaying: false};
    case 'increase_volume':
      return {...state, volume: state.volume + 0.1};
    case 'decrease_volume':
      return {...state, volume: state.volume - 0.1};
    case 'set_specific_volume':
      return {...state, volume: action.payload};
    case 'get_active_track':
      return {...state, activeTrack: action.payload};
    case 'change_track_time':
      return {...state, currentTrackTime: action.payload};
    case 'get_track_progress':
      return {...state, currentTrackTime: action.payload};
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
    const volume = await TrackPlayer.getVolume();

    dispatch({type: 'setup_track_player', payload: {volume: volume}});
    return volume;
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
      duration: 164,
    },
    {
      id: '2',
      url: require('../../assets/audio/BirdCall.mp3'),
      title: 'Bird Call',
      artist: 'Mac Miller',
      duration: 129,
    },
    {
      id: '3',
      url: require('../../assets/audio/BreakTheLaw.mp3'),
      title: 'Break The Law',
      artist: 'Mac Miller',
      duration: 196,
    },
    {
      id: '4',
      url: require('../../assets/audio/BrandName.mp3'),
      title: 'Brand Name',
      artist: 'Mac Miller',
      duration: 303,
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

const increaseVolume = dispatch => async () => {
  try {
    const volume = await TrackPlayer.getVolume();
    if (volume < 1) {
      await TrackPlayer.setVolume(volume + 0.1);
      dispatch({type: 'increase_volume'});
    }
  } catch (e) {
    console.log(e);
  }
};

const decreaseVolume = dispatch => async () => {
  try {
    const volume = await TrackPlayer.getVolume();
    if (volume > 0) {
      await TrackPlayer.setVolume(volume - 0.1);
      dispatch({type: 'decrease_volume'});
    }
  } catch (e) {
    console.log(e);
  }
};

const setSpecificVolume = dispatch => async volume => {
  try {
    await TrackPlayer.setVolume(volume);
    dispatch({type: 'set_specific_volume', payload: volume});
  } catch (e) {
    console.log(e);
  }
};

const setTrackDuration = dispatch => async value => {
  try {
    await TrackPlayer.seekTo(value);
    dispatch({type: 'change_track_time', payload: value});
  } catch (e) {}
};

const getTrackProgress = dispatch => async callback => {
  try {
    const track = await TrackPlayer.getProgress();
    dispatch({
      type: 'get_track_progress',
      payload: track.position,
    });
    if (callback) {
      callback();
    }
  } catch (e) {}
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
    increaseVolume,
    decreaseVolume,
    setSpecificVolume,
    setTrackDuration,
    getTrackProgress,
  },
  {
    isSetup: false,
    isPlaying: false,
    volume: null,
    activeTrack: {},
    currentTrackTime: 0,
  },
);
