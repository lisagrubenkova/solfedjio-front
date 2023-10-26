import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
      <Text style={styles.label}>Логин</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите логин"
        onChangeText={(text) => setLogin(text)}
        value={login}
      />
      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите пароль"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <Text style={styles.label}>Повторите пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Повторите пароль"
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        value={confirmPassword}
      />
      {passwordMatchError && <Text style={styles.errorText}>Пароли не совпадают</Text>}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});
