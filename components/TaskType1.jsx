import React from 'react';
import { StyleSheet, Modal, Button, Alert, View, Text, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import { TaskType2 } from './TaskType2';
export const TaskType1 = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [answerStatus, setAnswerStatus] = useState(null);

    const { levelId, tasks, index } = route.params;
    console.log(levelId);
    console.log(tasks);
    console.log(index);

    const rightAnswer = 'До';
    
    const answerHandler = (answer, rightAnswer) => {
        if (answer === rightAnswer) {
            setAnswerStatus('correct');
      setModalVisible(true);
    } else {
      setAnswerStatus('incorrect');
      setModalVisible(true);
    }
    };
    return (
        <View>
            <TopMenu/>
            <Image source={require( './imgs/do.png' )}/>
            <Text style={styles.question}>Что это за нота?</Text>
            <View style={styles.answers}>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('До', rightAnswer)}>
                <Text style={styles.answerText}>До</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Ре', rightAnswer)}>
                <Text style={styles.answerText}>Ре</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Ми', rightAnswer)}>
                <Text style={styles.answerText}>Ми</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Фа', rightAnswer)}>
                <Text style={styles.answerText}>Фа</Text>
            </TouchableOpacity>
            </View>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setAnswerStatus(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
            {answerStatus === 'correct' ? 'Правильный ответ!' : 'Неправильный ответ!'}
            </Text>
            <Button
            style={styles.btn}
              title="Следующее задание"
              onPress={() => {
               setModalVisible(!modalVisible);
                setAnswerStatus(null);
                navigation.navigate(TaskType2)
              }}
            />
          </View>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        color: '#D9D9D9',
        borderRadius: 30,
        
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
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
      },
    answers: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    answer: {
     backgroundColor: '#A19B9B',
     width: 145,
     height: 55,
     borderRadius:100, 
     justifyContent: 'center',
     marginLeft: 45,
     marginTop: 20
    },
    cAnswer: {
        backgroundColor: 'green',
      },
      wAnswer: {
        backgroundColor: 'red',
      },
    answerText: {
        fontSize: 40,
        alignSelf: 'center',
    },
    container: {
      flex: 1,
    },
    question: {
      fontSize: 42,
      alignSelf: "center"
    },
  });
  
