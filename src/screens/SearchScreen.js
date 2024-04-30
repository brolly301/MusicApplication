import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/search/SearchBar';

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <SearchBar search={search} setSearch={setSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});
