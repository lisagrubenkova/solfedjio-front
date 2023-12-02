import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import {Piano} from './Piano';
export const TaskType3 = () => {
    return (
        
        <View>
            <TopMenu/>
            <Image source={require( './imgs/do.png' )}/>
            <Text style={styles.question}>Сыграй ноту?</Text>
            <Piano/>
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
  
