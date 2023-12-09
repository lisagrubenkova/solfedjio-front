import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const LevelComplete = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Уровень пройден!!!</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Main')}}>
        <Text style={styles.buttonText}>Ура!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FE7579', // Цвет кнопки - красный, можно настроить радужные цвета
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'white', // Цвет текста на кнопке - белый, можно настроить другой цвет
  }
});

