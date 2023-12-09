import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import { Audio } from 'expo-av';


const imageMap = new Map();
imageMap.set("level1_task1", require('./imgs/do.png'));

const soundMap = new Map();
soundMap.set('level1_task2', require('./sounds/A4.mp3'));

export const Task = ({ route, navigation }) => {
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

    const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      soundMap.get(path)
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        setIsPlaying(false);
      }
    });

    await sound.playAsync();
    setIsPlaying(true);
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await playSound();
    }
  };


    const AnswersElements = tasks[index].answers.map((answer) =>  <TouchableOpacity style={styles.answer} onPress={() => answerHandler(answer.is_right)}>
    <Text style={styles.answerText}>{answer.text}</Text>
</TouchableOpacity>)
    return (
        <View>
            <TopMenu/>
            {
                (tasks[index].type === 'one') ? (
                  <View>
                    <Image source={imageMap.get(path)} />
                    <Text style={styles.question}>{tasks[index].text}</Text>
                  </View>
                ) : (
                  <View>
                    <TouchableOpacity onPress={togglePlayback}>
                     <Image 
                     source={require('./imgs/play.png')} 
                     style={styles.play}
                     />
                     </TouchableOpacity>
                     <Text style={styles.question}>{tasks[index].text}</Text>
                  </View>
                )
            }
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
            {answerStatus === 'correct' ? 'Правильный ответ!' : tasks[index].explanation}
            </Text>
            <TouchableOpacity
            style={styles.btn}
              onPress={() => {
               setModalVisible(!modalVisible);
                setAnswerStatus(null);
                  navigation.navigate(index == 2 ? 'LevelComplete' : 'Task', {
                  tasks: tasks,
                  index: index + 1
                 });
                }}>
                  <Text  style={styles.btntext}>Следующее задание</Text>
                </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        height: 55,
        alignSelf: 'center',
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    btntext: {
      fontSize: 20,
      paddingLeft: 15,
      paddingRight: 15
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
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center'
    },
    answer: {
     backgroundColor: '#A19B9B',
     width: '90%',
     height: 55,
     borderRadius:100, 
     justifyContent: 'center',
     marginTop: 10
    },
    cAnswer: {
        backgroundColor: 'green',
      },
      wAnswer: {
        backgroundColor: 'red',
      },
    answerText: {
        fontSize: 25,
        alignSelf: 'center',
    },
    container: {
      flex: 1,
    },
    question: {
      fontSize: 27,
      alignSelf: "center",
      marginTop: 20
    },
    play: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginTop: 150,
      marginBottom: 100
    }
  });
  
