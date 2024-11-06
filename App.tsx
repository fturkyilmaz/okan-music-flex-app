import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from './src/components/SearchBar';
import SongCard from './src/components/SongCard';
import musicData from './src/music-data.json';

export default function App() {
  const [list, setList] = useState(musicData);

  function handleSearch(text: string) {
    console.log(text);

    const filteredList = musicData.filter(item => {
      const searchedText = text.toLowerCase();
      const currentTitle = item.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SongCard song={item} />}
        ItemSeparatorComponent={() => <View style={{borderBottomWidth: 0.3}} />}
        ListEmptyComponent={() => (
          <View
            style={{
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Aradığınız şarkı yada artist bulunamadı!</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        <SongCard song={musicData[0]} />
        <SongCard song={musicData[1]} />
        <SongCard song={musicData[2]} />
        <SongCard song={musicData[3]} />
        <SongCard song={musicData[4]} />
        <SongCard song={musicData[5]} />
        <SongCard song={musicData[6]} />
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
