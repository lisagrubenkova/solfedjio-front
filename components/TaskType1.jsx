import React from 'react';
import { StyleSheet, Modal, Button, Alert, View, Text, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import { TaskType2 } from './TaskType2';

const imageMap = new Map();
imageMap.set("level1_task1", require('./imgs/do.png'));

export const TaskType1 = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [answerStatus, setAnswerStatus] = useState(null);

    const { levelId, tasks, index } = route.params;
    console.log(tasks[0]);
    const path = tasks[index].attachments[0].path;
    
    const answerHandler = (answer) => {
        if (answer) {
            setAnswerStatus('correct');
      setModalVisible(true);
    } else {
      setAnswerStatus('incorrect');
      setModalVisible(true);
    }
    };

    const AnswersElements = tasks[index].answers.map((answer) =>  <TouchableOpacity style={styles.answer} onPress={() => answerHandler(answer.is_right)}>
    <Text style={styles.answerText}>{answer.text}</Text>
</TouchableOpacity>)
    return (
        <View>
            <TopMenu/>
            {/* <Image style={{height: 100, width: 100}} source={{uri: 'assets:/do.png'}}/> */}
            <Image source={imageMap.get(path)} />
            <Text style={styles.question}>{tasks[index].text}</Text>
            <View style={styles.answers}>
            {AnswersElements}
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
                navigation.navigate(tasks[index + 1].type == 'one' ? 'TaskType1' : 'TaskType2', {
                 // levelId: props.id,
                  tasks: tasks,
                  index: index + 1
                 });
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
  
