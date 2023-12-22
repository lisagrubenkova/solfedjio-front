import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import { useState } from 'react';
import { HOST, cookies} from "../Const";
import { Reward } from '../RewardsPage/Reward';

export const LevelComplete = ({route, navigation}) => {
  const { completedLevel } = route.params;
  const [modalVisible, setModalVisible] = completedLevel.getLevelId() == 1 ? useState(true) : useState(false);
  postStatistics(completedLevel.getAllAnswersCount(), completedLevel.getRightAnswersCount(), completedLevel.getLevelId());
  return (
    <View style={styles.container}>
      <ImageBackground source={require( '../imgs/bg.png' )} resizeMode="cover" style={styles.bg}>
      <Text style={styles.levelText}>Уровень пройден!!!</Text>
      <Text  style={styles.text}>Количество правильных ответов: {completedLevel.getRightAnswersCount()} из {completedLevel.getAllAnswersCount()}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Main')} }>
        <Text style={styles.buttonText}>Продолжить играть</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{'Вы получили первую награду! Подробнее во вкладке с наградами!' }</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      </ImageBackground>
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
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  levelText: {
    fontSize: 40,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  modalView: {
    backgroundColor: '#CFCFCF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  modalText: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center'
  },
});

