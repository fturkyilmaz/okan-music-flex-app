import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 8,
    margin: 10,
    borderRadius: 5,
  },
  input: {color: 'black', fontSize: 18, fontWeight: 'bold'},
});
