import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';

export const Auth = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   // Отправка POST-запроса на бэкенд для аутентификации
    //   const response = await axios.post('https://example.com/api/login', {
    //     login: login,
    //     password: password,
    //   });
      console.log('Успешный вход:'/*, response.data*/);
      navigation.navigate('Levels');
      // Дополнительные действия после успешной аутентификации, например, навигация к другому экрану
    // } catch (error) {
    //   // Обработка ошибок аутентификации
    //   console.error('Ошибка входа:', error);
    //   Alert.alert('Ошибка', 'Неверные учетные данные. Попробуйте еще раз.');
    // }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require( './imgs/bg2.png' )} resizeMode="cover" style={styles.bg}>
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
    height: 185,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
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
    textAlign: 'center',},
  loginButton: {
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
});