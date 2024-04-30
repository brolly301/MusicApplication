import {Text, StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import SearchIcon from '../../../assets/icons/search.svg';

export default function SearchBar({search, setSearch}) {
  return (
    <View style={styles.contianer}>
      <SearchIcon width={22} height={22} style={styles.icon} />
      <TextInput
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Search for artists, songs, albums..."
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    height: 40,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});
