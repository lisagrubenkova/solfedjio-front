import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { HOST, cookies, SplashScreen } from "../Const";

export const LevelComplete = ({route, navigation}) => {
  const { completedLevel } = route.params;
  postStatistics(completedLevel.getAllAnswersCount(), completedLevel.getRightAnswersCount(), completedLevel.getLevelId());

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Уровень пройден!!!</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Main')}}>
        <Text style={styles.buttonText}>Ура!</Text>
      </TouchableOpacity>
    </View>
  );
};

async function postStatistics(all_answers_count, right_answers_count, level_id) {
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies
    },
    body: JSON.stringify({
      all_answers_count: all_answers_count,
      right_answers_count: right_answers_count,
      level_id: level_id
    })
  };
  const levels = await fetch(HOST + 'stat/create', requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .catch((err) => {
    console.log(err.message);
  });

  return levels;
}

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

