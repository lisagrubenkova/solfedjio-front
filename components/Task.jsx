import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default class ActiveLevel {
  levelId;
  tasks;
  index;
  rightAnswersCount;

  constructor(levelId, tasks, index) {
    this.levelId=levelId;
    this.tasks=tasks;
    this.index=index;
    this.rightAnswersCount = 0;
  }

  getCurrentTask() {
    return this.tasks[this.index]
  }

  getCurrentTaskAttachment() {
    return this.getCurrentTask().attachments[0].path
  }

  getTaskType() {
    return this.typeMap.get(this.getCurrentTask().type);
  }

  isLastLevel() {
    return this.index == this.tasks.length - 1;
  }

  nextTask() {
    console.log(this.getCurrentTask());
    this.index = this.index + 1;
  }

  getIndex() {
    return this.index;
  }

  incrementRightAnswersCount() {
    this.rightAnswersCount++;
  }

  getRightAnswersCount() {
    return this.rightAnswersCount;
  }

  getAllAnswersCount() {
    return this.tasks.length;
  }

  getLevelId() {
    return this.levelId;
  }
}

const imageMap = new Map();
imageMap.set("do", require('./imgs/notes/do.png'));
imageMap.set("re", require('./imgs/notes/re.png'));
imageMap.set("mi", require('./imgs/notes/mi.png'));
imageMap.set("fa", require('./imgs/notes/fa.png'));
imageMap.set("sol", require('./imgs/notes/sol.png'));
imageMap.set("lya", require('./imgs/notes/lya.png'));
imageMap.set("si", require('./imgs/notes/si.png'));
imageMap.set("bas", require('./imgs/notes/bas.png'));
imageMap.set("notonosec", require('./imgs/notonosec.png'));
imageMap.set("trez", require('./imgs/trez.png'));
imageMap.set("alt", require('./imgs/alt.png'));
imageMap.set("12", require('./imgs/12.png'));
imageMap.set("13", require('./imgs/13.png'));
imageMap.set("15", require('./imgs/15.png'));
imageMap.set("pherm", require('./imgs/pherm.png'));
imageMap.set("tenor", require('./imgs/tenor.png'));
imageMap.set("takt", require('./imgs/takt.png'));
imageMap.set("razmer", require('./imgs/razmer.png'));

const soundMap = new Map();
soundMap.set('level1_task2', require('./sounds/A4.mp3'));
soundMap.set('do', require('./sounds/C4.mp3'));
soundMap.set('re', require('./sounds/D4.mp3'));
soundMap.set('mi', require('./sounds/E4.mp3'));
soundMap.set('fa', require('./sounds/F4.mp3'));
soundMap.set('sol', require('./sounds/G4.mp3'));
soundMap.set('lya', require('./sounds/A4.mp3'));
soundMap.set('si', require('./sounds/B4.mp3'));

export const Task = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answerInfo, setAnswerInfo] = useState(null);

  const { activeLevel } = route.params;
  const answerHandler = (answer, description) => {
    if (answer) {
    activeLevel.incrementRightAnswersCount();
    setAnswerStatus('correct');
    setModalVisible(true);
  } else {
    setAnswerInfo(description);
    setAnswerStatus('incorrect');
    setModalVisible(true);
  }};

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      soundMap.get(activeLevel.getCurrentTaskAttachment())
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

  const currentTask = activeLevel.getCurrentTask();
  const AnswersElements = currentTask
  .answers.map((answer) =>  <TouchableOpacity style={styles.answer} onPress={() => answerHandler(answer.is_right, currentTask.description)}>
    <Text style={styles.answerText}>{answer.text}</Text>
</TouchableOpacity>)
    return (
        <View styles={styles.container}>
            <TopMenu/>
            {
                (activeLevel.getCurrentTask().type === 'one') ? (
                  <View>
                    <Image style={styles.qimg} source={imageMap.get(activeLevel.getCurrentTaskAttachment())} />
                    <Text style={styles.question}>{activeLevel.getCurrentTask().text}</Text>
                  </View>
                ) : (
                  <View>
                    <TouchableOpacity onPress={togglePlayback}>
                     <Image 
                     source={require('./imgs/play.png')} 
                     style={styles.play}
                     />
                     </TouchableOpacity>
                     <Text style={styles.question}>{activeLevel.getCurrentTask().text}</Text>
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
            {answerStatus === 'correct' ? 'Правильный ответ!' : answerInfo}
            </Text>
            <TouchableOpacity
            style={styles.btn}
              onPress={() => {
                setModalVisible(!modalVisible);
                setAnswerStatus(null);
                console.log("Current index: " + activeLevel.getIndex());
                console.log("Current right answers: " + activeLevel.getRightAnswersCount());
                if (activeLevel.isLastLevel()) {
                  console.log("GO TO COMPLETE");
                  navigation.navigate('LevelComplete', {
                    completedLevel: activeLevel
                  });
                } else {
                  console.log("GO TO NEXT LEVEL");
                  activeLevel.nextTask();
                  navigation.navigate('Task', {
                    activeLevel: activeLevel
                  });
                }
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
  qimg: {
    alignSelf: 'center',
    marginTop: 107.5,
    marginBottom: 107.5
  },
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
      paddingRight: 15,
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
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
      },
    answers: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
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
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    question: {
      fontSize: 27,
      alignSelf: "center",
      marginTop: 10
    },
    play: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginTop: 150,
      marginBottom: 150
    }
  });
  
