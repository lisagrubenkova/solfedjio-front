import { ImageBackground, Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import React from 'react';

export const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require( './imgs/bg2.png' )} resizeMode="cover" style={styles.bg}>
      <Image
      style = {styles.img}
      source={require( './imgs/startLogo.png' )}/>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 318,
    width: 318,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#4A94D7',
    padding: 15,
    borderRadius: 100,
    marginBottom: 10,
    width: 200,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
