import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Проект "Сольфеджио"</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Reg'); // Переход на экран регистрации
        }}
      >
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Auth'); // Переход на экран входа
        }}
      >
        <Text style={styles.buttonText}>Вход</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
