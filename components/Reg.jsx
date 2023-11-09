import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';

export const Reg = ({ onRegister }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegisterPress = () => {
    // Проверка на совпадение паролей
    if (password === confirmPassword) {
      // Передаем данные для регистрации вверх
      onRegister({ login, password });
      // Сброс ошибки при совпадении паролей
      setPasswordMatchError(false);
    } else {
      // Показываем ошибку, если пароли не совпадают
      setPasswordMatchError(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require( './imgs/bg.png' )} resizeMode="cover" style={styles.bg}>
      <Image
      style = {styles.img}
      source={require( './imgs/logo.png' )}/>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        onChangeText={(text) => setLogin(text)}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Повторите пароль"
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        value={confirmPassword}
      />
      {passwordMatchError && <Text style={styles.errorText}>Пароли не совпадают</Text>}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 185,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 217,
    height: 48,
    backgroundColor: '#D9D9D9',
    borderWidth: 0,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    fontSize: 22,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#4A94D7',
    padding: 10,
    borderRadius: 100,
    width: 217,
    height: 48,
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});