import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import C4 from './sounds/C4.mp3';
import D4 from './sounds/C4.mp3';
import E4 from './sounds/C4.mp3';
import F4 from './sounds/C4.mp3';
import G4 from './sounds/C4.mp3';
import A4 from './sounds/C4.mp3';
import B4 from './sounds/C4.mp3';

export const Piano = () => {
  const playSound = async (sound) => {
    const { sound: soundObject } = await Audio.Sound.createAsync(sound);
    await soundObject.playAsync();
    await soundObject.unloadAsync(); // Выгрузка после воспроизведения
  };

  const renderKey = (sound) => {
    return (
      <TouchableOpacity
        style={styles.key}
        onPress={() => playSound(sound)}
      />
    );
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderKey(C4)}
        {renderKey(D4)}
        {renderKey(E4)}
        {renderKey(F4)}
        {renderKey(G4)}
        {renderKey(A4)}
        {renderKey(B4)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  key: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    width: 50,
    height: 150,
    margin: 2,
  },
});

