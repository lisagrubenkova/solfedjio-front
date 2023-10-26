import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Отправка POST-запроса на бэкенд для аутентификации
      const response = await axios.post('https://example.com/api/login', {
        login: login,
        password: password,
      });
      console.log('Успешный вход:', response.data);

      // Дополнительные действия после успешной аутентификации, например, навигация к другому экрану
    } catch (error) {
      // Обработка ошибок аутентификации
      console.error('Ошибка входа:', error);
      Alert.alert('Ошибка', 'Неверные учетные данные. Попробуйте еще раз.');
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
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
    // Устанавливаем фиксированную ширину
    width: 300, // Пример: устанавливаем ширину в 300 пикселей
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});