import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Modal } from 'react-native';
import { HOST, cookies } from "../Const";
import { useState } from 'react';
import ActiveLevel from "../Task";

export const Level = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [stats, setStats] = useState(null);

    const isFinished = props.is_finished;
    const isEven = props.id % 2 === 0;
    const dynamicStyle = isEven ? styles.levelRight : styles.level;
    let dynamicColor;
    if (isFinished) {
      dynamicColor = styles.grey;
    } else {
      switch (props.id % 5) {
        case 1:
          dynamicColor = styles.red;
          break;
        case 2:
          dynamicColor = styles.orange;
          break;
        case 3:
          dynamicColor = styles.yellow;
          break;
        case 4:
          dynamicColor = styles.green;
          break;
        default:
          dynamicColor = styles.blue;
          break;
      }
    }
     
    return(
        <View style={styles.container}>
        <TouchableOpacity style={[dynamicStyle, dynamicColor]} onPress={() => resolveAction(isFinished, props, setModalVisible, setStats)}>
        <Text style={styles.buttonText}>{props.id}</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
            {'Этот уровень уже пройден!'}
            </Text>
            <Text style={styles.stattext}>
            Количество правильных ответов: {stats == null ? "123" : stats.right_answers_count}
            </Text>
            <Text style={styles.stattext}>
            Количество вопросов: {stats == null ? "123" : stats.all_answers_count}
            </Text>
            <TouchableOpacity
            style={styles.btn}
              onPress={() => {
                setModalVisible(!modalVisible);
                startLevel(props);
                }}>
                  <Text  style={styles.btntext}>Пройти заново</Text>
                </TouchableOpacity>
                <TouchableOpacity
            style={styles.btn}
              onPress={() => {
                setModalVisible(!modalVisible);
                }}>
                  <Text  style={styles.btntext}>Отмена</Text>
                </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    );
}

function resolveAction(isFinished, props, setModalVisible, setStats) {
  if (isFinished) {
    getStatistics(props, setStats);
    setModalVisible(true);
  } else {
    startLevel(props);
  }
}

function getStatistics(props, setStats) {
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies
    }
  };
  const stats = fetch(HOST + 'stat/' + props.id, requestOptions)
  .then(response => response.json())
  .then(json => setStats(json.result))
  .catch((err) => {
    console.log(err.message);
  });
}

function startLevel(props) {
    const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Cookie: cookies
        }
    };
    fetch(HOST + 'level/' + props.id, requestOptions)
      .then(response => response.json())
      .then(json => {
        const activeLevel = new ActiveLevel(props.id, json.result.tasks, 0);
        props.navigation.navigate('Task', {
            activeLevel: activeLevel
        });
      })
      .catch((err) => {
        console.log(err.message);});
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    red: {
        backgroundColor: '#FE7579',
    },
    orange: {
        backgroundColor: '#F49C41'
    },
    yellow: {
        backgroundColor: '#E6E14A'
    },
    green: {
        backgroundColor: '#50CB72'
    },
    blue: {
        backgroundColor: '#64D4EF'
    },
    grey: {
      backgroundColor: '#808080',
    },
    level: {
     width: 80,
     height: 75,
     borderRadius:20, 
     justifyContent: 'center',
     marginLeft: 45,
     marginTop: 20
    },
    levelRight: {
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginRight: 45,
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    buttonText: {
        fontSize: 50,
        alignSelf: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',   
    },
    modalContent: {
      backgroundColor: '#A19B9B',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 350,
      padding: 20,
      justifyContent: 'center',
    },
    modalText: {
      fontSize: 28,
      marginTop: 40,
      marginBottom: 20,
      textAlign: 'center',
    },
    btn: {
      backgroundColor: '#64D4EF',
      borderRadius: 10,
      height: 55,
      width: 180,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      marginBottom: 10,
  },
  btntext: {
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF'
  },
  stattext: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
})