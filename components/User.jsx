import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { useState } from 'react';
export const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.img} source={require('./imgs/ava.png')} />
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statHeader}>Статистика</Text>
        <View style={styles.statblocks}>
          <View style={styles.block}>
            <Text style={styles.digit}>3</Text>
            <Text style={styles.statText}>Наград получено</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.digit}>4</Text>
            <Text style={styles.statText}>Уровней пройдено</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.digit}>9</Text>
            <Text style={styles.statText}>Очки опыта</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    margin: 7,
  },
  username: {
    color: '#ffffff',
    fontSize: 35,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(161, 155, 155, 0.5)',
    borderRadius: 15,
    padding: 5
  },
  statHeader: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 10,
  },
  statblocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  block: {
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#878787',
    borderRadius: 15
  },
  digit: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  statText: {
    color: '#000000',
  },
});

  