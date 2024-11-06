import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function SongCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props?.song.imageUrl,
        }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.artistText}>{props.song.title}</Text>
            <Text style={styles.yearText}>{props.song.year}</Text>
          </View>
          {props.song?.isSoldOut ? (
            <View style={styles.soldOutContainer}>
              <Text style={styles.soldText}>TÜKENDİ</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  soldText: {
    color: 'red',
    // fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  soldOutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  artistText: {},
  yearText: {fontSize: 12, marginLeft: 12, color: 'gray', fontWeight: 'bold'},
  contentContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
