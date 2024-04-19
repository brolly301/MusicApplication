import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Favorite from '../../../assets/icons/musicPlayer/favorite.svg';
import Queue from '../../../assets/icons/musicPlayer/queue.svg';

export default function TrackDetails() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <Image
          source={require('../../../assets/images/albumCover.png')}
          style={styles.albumCover}
        />
      </View>
      <View style={styles.trackDetailsContainer}>
        <TouchableOpacity>
          <Queue width={30} height={30} fill={'white'} />
        </TouchableOpacity>
        <View style={styles.trackTextContainer}>
          <Text style={styles.trackTitle}>San Francisco</Text>
          <Text style={styles.trackArtist}>Mac Miller</Text>
        </View>
        <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <Favorite
            width={30}
            height={30}
            stroke={favorite ? '#D22B2B' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
  },
  albumCoverContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  albumCover: {
    width: '94%',
    height: '94%',
    resizeMode: 'contain',
    borderRadius: 25,
  },
  trackDetailsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  trackArtist: {
    fontSize: 13,
    color: '#ffffffAA',
  },
});
