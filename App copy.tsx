import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pink} />
      <View style={styles.blue} />
      <View style={styles.yellow} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#495057',
    // justifyContent: "space-around",
    // alignItems: "flex-start",
  },
  pink: {
    flex: 6,
    backgroundColor: '#ea638c',
    margin: 5,
  },
  blue: {flex: 2, backgroundColor: '#47ebff', margin: 5},
  yellow: {flex: 2, backgroundColor: '#ffd670', margin: 5},
});
