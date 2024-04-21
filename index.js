/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import AppWrapper from './AppWrapper';
import playbackService from './src/utilities/functions/playbackService';

AppRegistry.registerComponent(appName, () => AppWrapper);
TrackPlayer.registerPlaybackService(() => playbackService);
