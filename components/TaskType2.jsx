import React from 'react';
import { StyleSheet, Modal, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import {Audio} from 'expo-av'

export const TaskType2 = (navigation) => {
  const [modalVisible, setModalVisible] = useState(false);
    const [answerStatus, setAnswerStatus] = useState(null);

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
    const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./sounds/C4.mp3')
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
    return (
        
        <View>
            <TopMenu/>
            <TouchableOpacity onPress={togglePlayback}>
        <Image
          source={require('./imgs/play.png')}
          style={styles.play} // Размеры изображения
        />
      </TouchableOpacity>
            <Text style={styles.question}>Что это за нота?</Text>
            <View style={styles.answers}>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('До', rightAnswer)}>
                <Text style={styles.answerText}>До</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Ля', rightAnswer)}>
                <Text style={styles.answerText}>Ля</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Си', rightAnswer)}>
                <Text style={styles.answerText}>Си</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => answerHandler('Ре', rightAnswer)}>
                <Text style={styles.answerText}>Ре</Text>
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
                navigation.navigate(TaskType3)
              }}
            />
          </View>
        </View>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
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
    wAnswer: {
        backgroundColor: '#F42E2E',
        width: 145,
        height: 55,
        borderRadius:100, 
        justifyContent: 'center',
        marginLeft: 45,
        marginTop: 20
       },
    answerText: {
        fontSize: 40,
        alignSelf: 'center'
    },
    container: {
      flex: 1,
    },
    question: {
      fontSize: 42,
      alignSelf: "center"
    },
    play: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginTop: 150,
      marginBottom: 100
    }
  });
  
