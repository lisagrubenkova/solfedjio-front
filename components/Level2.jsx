import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { useState } from 'react';
import {Audio} from 'expo-av'

export const Level2 = () => {
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
          style={{ width: 100, height: 100 }} // Размеры изображения
        />
      </TouchableOpacity>
            <Text style={styles.question}>Что это за нота?</Text>
            <View style={styles.answers}>
            <TouchableOpacity style={styles.answer} onPress={() => Alert.alert('правильно')}>
                <Text style={styles.answerText}>До</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => Alert.alert('нет(')}>
                <Text style={styles.answerText}>Ре</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => Alert.alert('нет(')}>
                <Text style={styles.answerText}>Ми</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answer} onPress={() => Alert.alert('нет(')}>
                <Text style={styles.answerText}>Фа</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
  });
  
