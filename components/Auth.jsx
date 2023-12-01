import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ImageBackground, Alert } from 'react-native';
import { HOST, setCookies, cookies, cookiesStorage } from "./Const";

export const Auth = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    var details = {
      'username': login,
      'password': password
    };
    const formBody = Object.entries(details).map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&');
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody 
    };
    const response = await fetch(HOST + 'auth/jwt/login', requestOptions);
    if (response.status != 204) {
      Alert.alert('Неправильный логин или пароль'); 
    } else {
      var newCookies = response.headers.get('set-cookie')?.split('; ')[0];
      await cookiesStorage.set('cookies', newCookies);
      setCookies(newCookies);
      Alert.alert('Вы успешно вошли');
      navigation.navigate('Main');
    }
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

export async function setAndCheckCookies(setIsAuthorized) {
  setCookies(await cookiesStorage.get("cookies"));
  console.log("INITIAL COOKIES: " + cookies);
  if (cookies != undefined && cookies != null) {
    fetch(HOST + 'level/check_permissions', {
      method: 'GET',
      headers: {
        'Cookie': cookies
      }
    }).then((response) => {
        if (response.status == 200) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }).catch((err) => {
        console.log(err.message);
      });
  } else {
    setIsAuthorized(false);
  }
}

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